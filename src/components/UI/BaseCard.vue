<template>
  <div class="card">
    <img src="../../images/imgblur.png" alt="card-image" class="card__image" />
    <div class="card__info">
      <p class="card__text">Здесь вы можете добавить новый айтем в инвентарь</p>
      <base-button class="btn-add" @click="toggleModal()">Добавить</base-button>
    </div>
  </div>
  <base-item-modal v-if="!isClosed" @close="toggleModal()"></base-item-modal>
</template>

<script>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseItemModal from './BaseItemModal.vue';

export default {
  components: { BaseButton, BaseItemModal },
  emits: ['close'],
  setup() {
    const isClosed = ref(true);

    function toggleModal() {
      isClosed.value = !isClosed.value;
    }

    return { isClosed, toggleModal };
  },
};
</script>

<style scoped>
.card {
  max-width: 236px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  gap: 36px;
}

.card__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 14px 18px;
  gap: 12px;
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

.btn-add {
  background-color: #01eb18c9;
}
</style>
