<template>
  <header class="site-header" :class="{ floating: isFloating }">
    <div class="brand">{{ brand }}</div>
    <div class="main-nav">
      <ul class="nav-items">
        <li><a href="#posts">Posts</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">

const brand = useAppConfig().meta.title
const isFloating = ref(false)

const floatHeader = () => {
  const scrollValue = window.scrollY;
  if (isFloating && scrollValue === 0) {
    isFloating.value = false;
  } else if (scrollValue > 1) {
    isFloating.value = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', floatHeader);
})
</script>

<style>
.site-header {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10%;
  box-sizing: border-box;
  letter-spacing: .2rem;
  text-transform: uppercase;
  color: var(--color-white);
  transition: background-color 0.4s ease-in-out;

  a {
    color: var(--color-white);

    &:hover,
    &:active {
      color: var(--color-gray-400);
    }
  }

  &.floating {
    color: var(--color-text);
    background-color: var(--color-white);
    box-shadow: 0px 1px 4px 0px rgba(45, 45, 45, 0.4);

    a {
      color: var(--color-black);

      &:hover,
      &:active {
        color: var(--color-gray-400);
      }
    }
  }
}

.brand {
  font-family: var(--font-title);
  font-size: 1.2rem;
}

.main-nav {
  ul {
    display: flex;
    list-style: none;
    gap: 16px;
  }
}
</style>
