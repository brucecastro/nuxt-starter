<template>
  <section class="alt">
    <div class="container-lg">
      <h2 class="text-center">What people are saying</h2>
      <div class="quote-list">
        <blockquote v-for="quote in quotes">
          <p>{{ quote.text }}</p>
          <cite>&mdash; {{ quote.cite }}</cite>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { quotes } = await queryContent('_home')
    .where({ 
      _partial: true, 
      _path: '/_home/quotes' })
    .findOne();
</script>

<style>
.quote-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 10px;
  overflow-x: scroll;

  blockquote {
    flex: 0 1 auto;
    min-width: 250px;
    max-width: 450px;
    margin:20px;
    padding: 35px 30px;
    background-color: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: 5px;
    
    p {
      font-size: .9rem;

    }

    cite {
      display: block;
      text-align: right;
      color: var(--color-gray-400);
    }
  }
}

@media screen and (max-width:740px) {
  .quote-list {
    flex-wrap: wrap;
    
    blockquote {
      max-width: none;
      padding: 0;
      background-color: transparent;
      border: none;

    }
  }
}
</style>