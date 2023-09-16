<template>
  <NuxtLayout>
    <Hero />
    <Features />
    <Quotes />
    <Updates />
    <Contact />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'AH',
  meta: [{ name: 'description', content: 'My amazing site' }],
});
</script>
