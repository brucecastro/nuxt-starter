<template>
  <section class="container">
    <h2 class="text-center">Updates</h2>
    <div class="post-list">
      <article>
        <img src="https://placehold.co/250x300" title="Nice photos 1" />
        <h3>Post 1</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
      </article>
      <article class="highlight">
        <img src="https://placehold.co/250x300" title="Nice photos 2" />
        <h3>Post 2</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
      </article>
      <article>
        <img src="https://placehold.co/250x300" title="Nice photos 3" />
        <h3>Post 3</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
      </article>
    </div>
    <div class="actions">
      <button class="primary lg">View More</button>
    </div>
  </section>
</template>

<style>
.post-list {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;

  article {
    flex: 0 1 auto;
    margin: 25px;
    text-align: center;

    img {
      margin-bottom: 25px;
    }

    h3 {
      margin-bottom: 10px;
    }

    time {
      color:#999;
    }

    p {
      margin: 30px 0 0;
      text-align: justify;
    }
  }

  h3 {
    margin-bottom: 25px;
  }
}
</style>