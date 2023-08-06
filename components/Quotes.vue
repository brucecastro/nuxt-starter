<template>
  <section>
    <h2 class="text-center">What people are saying</h2>
    <div class="quote-list">
      <blockquote>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        <cite>Cool Person</cite>
      </blockquote>
      <blockquote class="highlight">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        <cite>Cool Person</cite>
      </blockquote>
      <blockquote>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        <cite>Cool Person</cite>
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
    padding: 35px 25px;
    border: 1px solid #ddd;

    .highlight {}
  }

  

}
</style>