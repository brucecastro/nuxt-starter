<template>
  <header class="site-header" :class="{ floating: isFloating, 'menu-open': isMenuOpen }">
    <div class="brand">{{ brand }}</div>
    <div class="overlay" @click="closeMobileMenu"></div>
    <div class="menu-btn" @click="toggleMobileMenu">
      <span>&nbsp;</span>
    </div>
    <nav class="main-nav">
      <ul class="nav-items" @click="closeMobileMenu">
        <li><a href="#posts">Posts</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

const brand = useAppConfig().meta.title
const isFloating = ref(false)
const isMenuOpen = ref(false)

const floatHeader = () => {

  const scrollValue = window.scrollY;
  if (isFloating && scrollValue === 0) {
    isFloating.value = false;
  } else if (scrollValue > 1) {
    isFloating.value = true;
  }
}

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.classList.toggle('has-overlay')
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
  document.body.classList.remove('has-overlay')
}

onMounted(() => {
  window.addEventListener('scroll', floatHeader);
})
</script>

<style>
.site-header {
  position: fixed;
  z-index: 80;
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

.overlay,
.menu-btn {
  display: none;
}

.main-nav {
  ul {
    display: flex;
    list-style: none;
    gap: 16px;
  }
}


@media screen and (max-width:740px) {

body.has-overlay {
  overflow: hidden;
}

.site-header {
  justify-content: center;

  a {
    color: var(--color-black);
    padding:10px 0;

    &:hover,
    &:active {
      color: var(--color-gray-400);
    }
  }
}

.main-nav {
  position:absolute;
  top:0;
  left:0;
  display: block;
  width: 45%;
  height: 100vh;
  padding: 100px 30px 50px;
  background-color: var(--color-white);
  font-size: 1.1rem;
  box-shadow: 2px 0px 10px 4px rgba(30, 30, 30, 0.7);
  transform: translate(-130%);
  transition: transform 0.5s ease-in-out;

  ul {
    flex-direction: column;
    gap:20px;
  }
}

.menu-open .main-nav {
  position: fixed;
  transform: translateX(0);
  z-index: 82;
}

.menu-btn {
  display: block;
  position: absolute;
  top:25px;
  left:25px;
  width: 32px;
  height: 30px;
  cursor: pointer;
  user-select: none;
  z-index: 84;
}

.menu-btn > span,
.menu-btn > span::before,
.menu-btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
  transition-duration: .25s;
}
.menu-btn > span::before {
  content: '';
  top: 11px;
}
.menu-btn > span::after {
  content: '';
  top: 22px;
}

.floating .menu-btn,
.menu-open .menu-btn {
  & > span,
  & > span::before,
  & > span::after {
    background-color: var(--color-black);
  }
}

.menu-open .menu-btn {
  position: fixed;

  & > span {
    top:11px;
    transform: rotate(45deg);
  }

  & > span::before {
    top: 0px;
    transform: rotate(0deg);
  }

  & > span::after {
    top:0px;
    transform: rotate(90deg);
  }
}

.menu-open .overlay {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(30, 30, 30, 0.6);
  z-index: 81;
}

}
</style>
