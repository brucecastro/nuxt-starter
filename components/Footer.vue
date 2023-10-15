<template>
  <footer class="site-footer">
    <div class="left">Copyright &copy; 2023 {{ brand }}. All rights reserved.</div>
    <div class="right">
      <ul>
        <li><a href="#terms">Terms and Policy</a></li>
        <li><a href="#dislcaimer">Disclaimer</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const brand = useAppConfig().meta.title
</script>
<style>

.site-footer {
  padding: 30px 10%;
  background-color: var(--color-secondary-100);
  display: flex;
  justify-content:space-between;
}

.right ul {
  list-style-type: none;

  li {
    display: inline-block;
    padding: 0px 10px;
  }
}
</style>