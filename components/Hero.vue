<template>
  <section class="hero">
    <div class="container">
      <h1 class="text-special">Welcome to this website,<br> <strong>a great place</strong></h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cupiditate placeat dignissimos perferendis accusantium</p>
      <div class="actions">
        <a href="#posts" class="btn" @click="btnClick('secondary')">Preview</a>
        <a :href="links.primary" class="btn primary" @click="btnClick()">Subscribe Now</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const links = useAppConfig().links;

const btnClick = (type = 'primary') => {
  console.log('clicked: ', type);
}
</script>

<style>

.hero {
  color: var(--color-white);
  margin-top: 0;
  padding: 160px 0 80px 0;
  text-align: center;
  background: no-repeat url('~/assets/img/hero.jpg');
  background-position: center;
  background-size: cover;
  
  h1,
  p {
    text-shadow: 1px 1px 3px rgba(1, 1, 1, 0.8);
  }

  h1.text-special strong {
    text-shadow: none;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px 2px rgba(1, 1, 1, 0.8));
  }

  .btn {
    display: inline-block;
  }

  .btn:not(.primary) {
    color: var(--color-white);
    border-color: var(--color-white);

    &:hover,
    &:focus {
      background: var(--color-white);
      color: var(--color-black)
    }
  }

}

@media screen and (max-width:740px) {
  .hero {
    padding-top: 120px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
