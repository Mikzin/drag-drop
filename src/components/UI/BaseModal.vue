<template>
  <div class="modal">
    <img
      src="../../images/rect1.png"
      alt="inventory-item"
      class="modal__image"
    />
    <div class="modal__info">
      <h2 class="modal__title">Title of inventory item</h2>
      <p class="modal__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        dolores cumque
      </p>
    </div>
    <div>
      <input
        class="modal__input"
        placeholder="Введите количество"
        v-if="isDeleted"
      />
      <base-button @click="toggleButtons" v-if="!isDeleted"
        >Удалить предмет</base-button
      >
      <div class="modal__buttons" v-if="isDeleted">
        <base-button @click="toggleButtons" class="btn-decline"
          >Отмена</base-button
        >
        <base-button @click="toggleButtons" class="btn-approve"
          >Подтвердить</base-button
        >
      </div>
      <img class="modal-close" src="../../images/close.svg" />
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  data() {
    return {
      isDeleted: false,
    };
  },
  methods: {
    toggleButtons() {
      this.isDeleted = !this.isDeleted;
    },
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

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
    border-bottom: 1px solid #4d4d4d;
    padding-bottom: 24px;
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
  }

  &__input {
    color: #ffffff;
    opacity: 0.4;
    background-color: #262626;
    border: 1px solid #4d4d4d;
    border-radius: 4px;
    padding: 11px 55px 12px 12px;
    margin-bottom: 20px;
  }
  &__buttons {
    display: flex;
    gap: 10px;
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
