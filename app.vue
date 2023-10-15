<template>
  <NuxtLayout>
  </NuxtLayout>
</template>

<script setup lang="ts">
const siteMeta = useAppConfig().meta;
useHead({
  title: siteMeta.title,
  meta: [{ name: 'description', content: siteMeta.description }],
});
</script>
