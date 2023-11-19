<template>
  <section class="">
    <div class="container">
      <h2 class="text-center">{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="features">
        <div v-for="feature in features" class="feature">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { title, description, features } = await queryContent('_home').where({ _partial: true, features: { $exists: true } }).findOne();
</script>

<style>
.features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 30px 0 10px;
  padding: 10px 0;

  .feature {
    flex: 0 1 auto;
    padding: 10px 0;
    max-width: 250px;
    text-align: justify;
  }

  h3 {
    margin-bottom: 25px;
  }
}

@media screen and (max-width:740px) {
  .features {
    flex-wrap: wrap;

    .feature {
      max-width: none;
    }
  }
}
</style>