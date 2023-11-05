<template>
  <section class="alt" id="social">
    <div class="container">
      <h2 class="text-center">Social</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quia vel cupiditate reprehenderit. Quo laboriosam ea fuga ab quisquam ducimus eligendi doloremque est voluptas libero debitis provident commodi, perspiciatis temporibus.
      </p>
      
      <ul class="social-icons">
        <li v-for="network in networks">
          <a :href="network.url" :title="network.name">
            <i :class="network.id" aria-hidden="true">{{ network.name }}</i>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>


<script setup lang="ts">

interface SocialNetwork {
  id: string,
  name: string,
  url: string,
}

const socialsConfig = useAppConfig().social as Record<string, string>;

const networks: SocialNetwork[] = [
    { id: 'instagram', name: 'Instagram', url: socialsConfig.instagram },
    { id: 'x', name: 'X (Formerly Twitter)', url: socialsConfig.x },
    { id: 'tiktok', name: 'TikTok', url: socialsConfig.tiktok },
  ];

</script>

<style>
ul.social-icons {
  display: flex;
  margin:30px auto;
  justify-content: center;
  list-style-type: none;
  color:#888;

  li {
    margin: 0 10px;
  }

  i {
    display: block;
    width:50px;
    height: 50px;
    text-indent: -999em;
    background-size: contain;
    background-repeat: no-repeat;
    
  }

  i.instagram {
    background-image: url('@/assets/icons/social-instagram.svg');  
  }
  i.tiktok {
    background-image: url('@/assets/icons/social-tiktok.svg');  
  }
  i.x {
    background-image: url('@/assets/icons/social-x.svg');  
  }

}
</style>