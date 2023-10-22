<template>
  <section id="updates">
    <div class="container-lg">
      <h2 class="text-center">Recent Updates</h2>
      <div class="post-list">
        <article>
          <div class="thumbnail">
            <img src="~/assets/img/feat1.jpg" title="Nice post 1" />
          </div>
          <h3>Post 1</h3>
          <time datetime="2023-06-01">June 1st</time>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
          <p class="view-link"><a href="#">View &rsaquo;</a></p>
        </article>
        <article>
          <div class="thumbnail">
            <img src="~/assets/img/feat2.jpg" title="Nice post 2" />
          </div>
          <h3>Post 2</h3>
          <time datetime="2023-06-01">June 1st</time>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
          <p class="view-link"><a href="#">View &rsaquo;</a></p>
        </article>
        <article>
          <div class="thumbnail">
            <img src="~/assets/img/feat3.jpg" title="Nice post 3" />
          </div>
          <h3>Post 3</h3>
          <time datetime="2023-06-01">June 1st</time>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur</p>
          <p class="view-link"><a href="#">View &rsaquo;</a></p>
        </article>
      </div>
      <div class="actions">
        <button class="primary lg">View More</button>
      </div>
    </div>
  </section>
</template>

<style>
.post-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 45px;
  margin: 45px auto 65px;

  h3 {
    margin-bottom: 25px;
  }

  article {
    flex: 1 0 270px;
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
  }

  .thumbnail {
    width: 100%;
    height: 300px;
    margin: 0 auto 25px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    max-width: 100%;
    object-fit: cover;
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

@media screen and (max-width:740px) {
  .post-list {
    flex-wrap: wrap;

    .thumbnail {
      height: 450px;
    }
  }
}

@media screen and (max-width:540px) {
  .post-list {
    .thumbnail {
      width: 90%;
      height: 300px;
    }
  }
}
</style>