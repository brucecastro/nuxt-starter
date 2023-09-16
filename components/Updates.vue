<template>
  <section class="container" id="updates">
    <h2 class="text-center">Recent Updates</h2>
    <div class="post-list">
      <article>
        <img src="~/assets/img/feat1.jpg" width="250" height="300" title="Nice post 1" />
        <h3>Post 1</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <p class="view-link"><a href="#">View &rsaquo;</a></p>
      </article>
      <article>
        <img src="~/assets/img/feat2.jpg" width="250" height="300" title="Nice post 2" />
        <h3>Post 2</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <p class="view-link"><a href="#">View &rsaquo;</a></p>
      </article>
      <article>
        <img src="~/assets/img/feat3.jpg" width="250" height="300" title="Nice post 3" />
        <h3>Post 3</h3>
        <time datetime="2023-06-01">June 1st</time>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
        <p class="view-link"><a href="#">View &rsaquo;</a></p>
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
  gap: 45px;
  margin: 45px 0 65px;

  article {
    /* opacity:0; */
    flex: 0 1 auto;
    padding: 30px;
    text-align: center;
    background: linear-gradient(
      var(--color-secondary-50),
      var(--color-secondary-100) 80%
    );
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    /* animation: 0.8s ease-out 0.3s forwards slideUp; */

    &:hover {
      box-shadow: 0 22px 43px rgba(0, 0, 0, 0.15)
    }

    &:nth-of-type(2) {
      animation-delay: 1.1s;
    }
    &:nth-of-type(3) {
      animation-delay: 1.9s;
    }

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
      margin-top: 30px;
      text-align: justify;
    }

    .view-link {
      text-align: right;
      margin: 0;
    }
  }

  h3 {
    margin-bottom: 25px;
  }
}
</style>