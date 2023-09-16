<template>
  <section class="alt">
    <h2 class="text-center">What people are saying</h2>
    <div class="quote-list">
      <blockquote>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <cite>&mdash; Cool Person</cite>
      </blockquote>
      <blockquote class="highlight">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <cite>&mdash; Cool Person</cite>
      </blockquote>
      <blockquote>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <cite>&mdash; Cool Person</cite>
      </blockquote>
    </div>
  </section>
</template>

<style>
.quote-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  blockquote {
    flex: 0 1 auto;
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
</style>