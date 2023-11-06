<template>
  <section id="updates">
    <div class="container-lg">
      <h2 class="text-center">Recent Updates</h2>
      <div class="post-list">
        <pre v-if="error">There was an error fetching the updates</pre>
        <Update v-else v-for="update in updates" :key="update.uri" :update="update" />
      </div>
      <div class="actions">
        <button class="primary lg">View More</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { IUpdate } from './Update.vue';

  interface UpdateResponse {
    data: {
      updates: {
        nodes: Array<Omit<IUpdate, 'featuredImage'> 
          & { featuredImage: { node: { srcSet: string; sourceUrl: string }}}>
      }
    },
  }

  const config = useRuntimeConfig()

  const isUpdateResponse = function(data: any): data is UpdateResponse {
    return data.data.updates.nodes[0].featuredImage !== undefined
  }

  const { data: updates, error } = await useFetch(config.public.apiUrl , {
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

  if(error.value) {
    throw new Error(`Error fetching the Updates: [${error.value.statusCode}] ${error.value.statusMessage}`)
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