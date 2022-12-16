<template>
  <div class="card">
    <img src="../../images/imgblur.png" alt="card-image" class="card__image" />
    <div class="card__info">
      <h2 class="card__title">Title</h2>
      <p class="card__text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi
        soluta vitae sequi asperiores nisi voluptatibus inventore.
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  max-width: 236px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
}

.card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px 18px;
}

.card__image {
  margin: 18px 14px 20px;
}

.card__title {
  margin: 12px 0 0;
}

.card__text {
  margin: 12px 0 0;
  text-align: center;
}
</style>
