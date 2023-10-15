<template>
  <div>
    <Header />
    <div id="main">
      <Hero />
      <Features />
      <Quotes />
      <Updates />
      <Social />
      <Contact v-if="contactEnabled"/>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
  const contactEnabled = useAppConfig().contact.enabled;
</script>