<template>
  <section id="updates">
    <div class="container-lg">
      <h2 class="text-center">Recent Updates</h2>
      <div class="post-list">
        <Update v-for="update in data" :key="update.uri" :update="update" />
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
        nodes: Array<Omit<IUpdate, 'featuredImage'> & { featuredImage: string | { node: { srcSet: string; sourceUrl: string }}}>
      }
    },
  }

  const isUpdateResponse = function(data: any): data is UpdateResponse {
    return data.data.updates !== undefined;
  }

  // TODO: Grab URL from env/config
  const { data, refresh, pending } = await useFetch('http://nuxtstarter.local/graphql', {
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
    transform(data) {
      if(isUpdateResponse(data)) {
        const updates = data.data.updates.nodes;
        
        for (const update of updates) {
          if(typeof update.featuredImage == 'object' && typeof update.featuredImage.node == 'object') {
            update.featuredImage = update.featuredImage.node.sourceUrl
            // update.featuredImage = update.featuredImage.node.srcSet
          }
        }

        return updates
      }
      else {
        //TODO: handle better
        console.log('data is not a valid UpdateResponse')
      }
      
    }
  })
  
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