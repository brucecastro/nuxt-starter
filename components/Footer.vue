<template>
  <footer class="site-footer">
    <div class="container">
      <div class="left">Copyright &copy; 2023 {{ brand }}. All rights reserved.</div>
      <div class="links">
        <ul>
          <li><a href="#terms">Terms and Policy</a></li>
          <li><a href="#dislcaimer">Disclaimer</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  const brand = useAppConfig().meta.title
</script>
<style>

.site-footer {
  padding: 30px 0;
  background-color: var(--color-secondary-100);
  
  & > div {
    display: flex;
    justify-content:space-between;
  }

  .links ul {
    list-style-type: none;
    text-align: right;

    li {
      display: inline-block;
      padding: 0px 10px;
    }
  }
}


</style>