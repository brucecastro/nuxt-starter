<template>
  <section id="posts">
    <div class="container-lg">
      <h2 class="text-center">Recent Posts</h2>
      <div v-if="!error" class="post-list">
        <Update v-for="post in posts" :key="post.uri" :update="post" />
      </div>
      <div class="actions">
        <a :href="links.primary" class="btn primary lg">View More</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { type IUpdate } from './Update.vue';


interface UpdateResponse {
  data: {
    updates: {
      nodes: Array<Omit<IUpdate, 'featuredImage' | 'updateLinks'> 
        & { 
          featuredImage: { node: { srcSet: string; sourceUrl: string }},
          updateLinks: { linkPrimary: string, linkSecondary: string }
        }>
    }
  }
}
const links = useAppConfig().links;
const config = useRuntimeConfig()

const isUpdateResponse = function(data: any): data is UpdateResponse {
  return data.data.updates.nodes[0].featuredImage !== undefined
}

const { data: posts, error } = await useFetch(config.public.apiUrl , {
  method: 'get',
  query: {
    query: `
      query NewQuery {
        updates(last: 3) {
          nodes {
            title
            date
            excerpt
            uri
            featuredImage {
              node {
                srcSet
                sourceUrl
              }
            }
            updateLinks {
              linkPrimary
              linkSecondary
            }
          }
        }
    }`
  },
  transform(data: any) {
    if(isUpdateResponse(data)) {
      const updates: IUpdate[] = []

      for (const update of data.data.updates.nodes) {
        if(typeof update.featuredImage == 'object' && typeof update.featuredImage.node == 'object') {
          updates.push({
            title: update.title,
            excerpt: update.excerpt,
            date: update.date,
            uri: update.uri,
            featuredImage: {
              sourceUrl: update.featuredImage.node.sourceUrl,
              srcSet: update.featuredImage.node.srcSet
            },
            updateLinks: {
              primary: update.updateLinks.linkPrimary,
              secondary: update.updateLinks.linkSecondary
            }

          })
        }
      }

      return updates
    }
    else {
      console.log('Data is not a valid UpdateResponse')
    }
  }
})

if(error.value || !config.public.apiUrl) {
  console.log('Could not fetch posts');
}
  
</script>

<style>
.post-list {
  display: flex;
  justify-content: space-between;
  align-items:stretch;
  flex-wrap: wrap;
  gap: 45px;
  margin: 45px auto 65px;

  h3 {
    margin-bottom: 25px;
  }

}

</style>