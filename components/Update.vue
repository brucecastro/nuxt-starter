<template>
  <article class="post">
    <div class="thumbnail">
      <NuxtImg :src="update.featuredImage.sourceUrl" :title="update.title" />
    </div>
    <h3>{{ update.title }}</h3>
    <time :datetime="update.date">{{ new Date(update.date).toLocaleDateString() }}</time>
    <div class="excerpt" v-html="update.excerpt"></div>
    <p class="view-link" v-if="update.updateLinks.primary">
      <a :href="update.updateLinks.primary" :title="update.title"><span>View &rsaquo;</span></a>
    </p>
  </article>
</template>

<script setup lang="ts">
  export interface IUpdate {
    title: string,
    excerpt: string,
    date: string,
    uri: string,
    featuredImage: {
      sourceUrl: string,
      srcSet: string
    },
    updateLinks: {
      primary: string,
      secondary: string
    }

  }

  defineProps<{ update: IUpdate }>();

</script>

<style>
article.post {
  flex: 1 0 270px;
  position: relative;
  padding: 30px 30px 60px;
  text-align: center;
  background: linear-gradient(
    var(--color-secondary-50),
    var(--color-secondary-100) 80%
  );
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
  /* animation: 0.8s ease-out 0.3s forwards slideUp; */

  &:hover {
    box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15)
  }

  &:nth-of-type(2) {
    animation-delay: 1.1s;
  }
  &:nth-of-type(3) {
    animation-delay: 1.9s;
  }


  .thumbnail {
    width: 100%;
    height: 300px;
    margin: 0 auto 25px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 10px;
  }

  time {
    color:#999;
  }

  p {
    margin-top: 30px;
    text-align: justify;
  }

  .view-link {
    a {
      position: absolute;
      top:0;
      right:0;
      left:0;
      bottom:0;
      display: block;

      span {
        position: absolute;
        bottom: 25px;
        right: 30px;
      }
    }
    text-align: right;
    margin: 0;
  }
}

@media screen and (max-width:740px) {
  article.post {
    .thumbnail {
      height: 450px;
      /* max-height: 450px; */
      min-width: 260px;
    }
  }
}

@media screen and (max-width:540px) {
  article.post {
    .thumbnail {
      width: 90%;
      height: 300px;
      min-width: auto;
    }
  }
}
</style>