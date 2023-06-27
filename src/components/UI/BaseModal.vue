<template>
  <div class="modal">
    <img :src="image" alt="inventory-item" class="modal__image" />
    <div class="modal__info">
      <h2 class="modal__title">Удалить предмет</h2>
      <p class="modal__text">
        Чтобы удалить предмет, введите количество и нажмите "Подтвердить"
      </p>
    </div>
    <div class="modal__confirm">
      <input
        class="modal__input"
        placeholder="Введите количество"
        v-if="isDeleted"
        @input="$emit('onInput', $event)"
        type="number"
      />
      <base-button @click="toggleButtons" v-if="!isDeleted"
        >Удалить предмет</base-button
      >
      <div class="modal__buttons" v-if="isDeleted">
        <base-button @click="toggleButtons" class="btn-decline"
          >Отмена</base-button
        >
        <base-button @click="$emit('delete', $event)" class="btn-approve"
          >Подтвердить</base-button
        >
      </div>
      <img
        class="modal-close"
        src="../../images/close.svg"
        @click="$emit('close')"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';

export default {
  emits: ['close', 'delete', 'onInput'],
  props: ['image'],
  components: { BaseButton },
  setup() {
    const isDeleted = ref(false);
    const inputValue = ref('');

    function toggleButtons() {
      isDeleted.value = !isDeleted.value;
    }

    return { isDeleted, inputValue, toggleButtons };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  max-width: 255px;
  height: 500px;
  background-color: rgba(38, 38, 38, 0.5);
  border: 1px solid #4d4d4d;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
  animation: slideIn 0.8s linear;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    margin: 0 20px 0;
    border-top: 1px solid #4d4d4d;
    padding-top: 16px;
  }

  &__text {
    margin: 24px 20px;
    overflow: hidden;
  }

  &__image {
    width: 130px;
    height: 130px;
    margin: 55px 60px 30px;
  }

  &-close {
    position: absolute;
    top: 14px;
    right: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &__input {
    color: #ffffff;
    opacity: 0.4;
    background-color: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    padding: 11px 55px 12px 12px;
    margin-bottom: 18px;
  }
  &__buttons {
    display: flex;
    gap: 10px;
  }

  &__confirm {
    border-top: 1px solid #4d4d4d;
    padding-top: 18px;
  }

  @keyframes slideIn {
    0% {
      transform: translateX(400px);
      animation-timing-function: ease-out;
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      animation-timing-function: ease-in;
    }
  }
}

.btn-decline {
  padding: 8px 19px;
  background-color: #ffffff;
  color: black;
}

.btn-approve {
  padding: 8px 15px;
}
</style>
