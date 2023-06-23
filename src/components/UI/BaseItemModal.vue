<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__header">
        <h2 class="modal__title">Добавление айтема</h2>
        <span class="modal__close" @click="$emit('close')">&times;</span>
      </div>
      <div class="modal__body">
        <p class="modal__text">
          Для того, чтобы добавить новый айтем в инвентарь, выберите его тип и
          количество.
        </p>
        <div class="modal__form">
          <label for="item-color" class="modal__label">Цвет:</label>
          <select id="item-color" v-model="selectedColor" class="modal__input">
            <option value="yellow">Желтый</option>
            <option value="blue">Синий</option>
            <option value="green">Зеленый</option>
          </select>
          <label for="item-quantity" class="modal__label">Количество:</label>
          <input
            type="number"
            id="item-quantity"
            v-model.number="quantity"
            class="modal__input"
          />
        </div>
      </div>
      <base-button class="btn-add" @click="addNewItem">Добавить</base-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import { addItem } from './inventory';

import item1 from '../../images/rect1.png';
import item2 from '../../images/rect2.png';
import item3 from '../../images/rect3.png';

export default {
  components: { BaseButton },
  emits: ['close'],
  setup() {
    const selectedColor = ref('red');
    const quantity = ref(1);
    const image = ref();

    function getImage() {
      if (selectedColor.value === 'yellow') {
        image.value = item2;
      }
      if (selectedColor.value === 'blue') {
        image.value = item3;
      }
      if (selectedColor.value === 'green') {
        image.value = item1;
      }
    }
    ///////////////
    function addNewItem() {
      addItem({
        id: 4,
        image: getImage(),
        quantity: quantity.value,
      });
    }

    return {
      selectedColor,
      quantity,
      addNewItem,
    };
  },
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

.modal__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.modal__label {
  margin-bottom: 5px;
  color: #fff;
}

.modal__input {
  background-color: #4d4d4d;
  border: none;
  border-radius: 12px;
  color: white;
  text-align: center;
  padding: 6px;
}
</style>
