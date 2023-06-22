<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Add new item</h2>
        <span class="modal__close" @click="$emit('close')">&times;</span>
      </div>
      <div class="modal__body">
        <p class="modal__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa,
          laborum voluptate reprehenderit porro necessitatibus doloremque!
        </p>
      </div>
      <base-button class="btn-add">Add</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  emits: ['close'],
  setup() {},
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal__content {
  max-width: 400px;
  width: 90%;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal__title {
  margin: 0;
  color: #fff;
}

.modal__close {
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
}

.modal__body {
  margin-bottom: 20px;
}

.modal__text {
  margin: 0;
  color: #fff;
  text-align: center;
}

.btn-add {
  background-color: #01eb18c9;
}
</style>
