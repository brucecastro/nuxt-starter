<template>
  <section class="">
    <div class="container">
      <h2 class="text-center">Lorem ipsum dolor sit amet consectetur</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a href="#">Link example</a>. <strong>This is bold.</strong> <i>This is italic.</i> Expedita dolor quasi omnis perferendis, ut nulla sed itaque quis, nobis ratione eius! Sed culpa nemo iusto quae qui. Eos, consectetur sed.</p>
      <div class="features">
        <div class="feature">
          <h3>Professional</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        </div>
        <div class="feature">
          <h3>High Quality</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        </div>
        <div class="feature">
          <h3>Fast</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corporis tempora laborum atque, consectetur,</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.features {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 30px 0 10px;
  padding: 10px 0;

  .feature {
    flex: 0 1 auto;
    padding: 10px 0;
    max-width: 250px;
    text-align: justify;
  }

  h3 {
    margin-bottom: 25px;
  }
}

@media screen and (max-width:740px) {
  .features {
    flex-wrap: wrap;

    .feature {
      max-width: none;
    }
  }
}
</style>