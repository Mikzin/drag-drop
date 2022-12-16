<template>
  <div class="frame">
    <p class="frame__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, labore
      doloremque reiciendis odit tempora corporis quisquam quos accusantium in
      ratione incidunt animi neque quas officiis mollitia harum. Iure, modi
      neque?
    </p>
    <img src="../../images/close.svg" alt="close-btn" class="frame__button" />
  </div>
</template>

<style scoped>
.frame {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  padding: 18px 68px 18px 18px;
  position: relative;
}

.frame__button {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.frame__text {
  margin: 0;
}

.frame__button:hover {
  opacity: 0.8;
}
</style>
