<template>
  <section class="container hero">
    <h1>Welcome to this website,<br> a great place</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam cupiditate placeat dignissimos perferendis accusantium</p>
    <div class="actions">
      <button>Preview</button>
      <button class="primary">Subscribe Now</button>
    </div>
  </section>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  text: String
})

props.title
props.text

</script>

<style>

.hero {
  margin-top: 0;
  padding: 100px 30px 80px 30px;
  text-align: center;
  background:#bbb;

  .actions {
    margin: 20px 0;
  }
}



</style>
