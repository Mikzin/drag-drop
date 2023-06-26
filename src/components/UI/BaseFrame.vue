<template>
  <div class="frame" v-if="isClosed">
    <p class="frame__text">
      Приложение представляет собой инвентарь, разработанный для оптимального
      управления предметами и айтемами. SPA обеспечивает удобный и интуитивно
      понятный интерфейс, позволяющий легко добавлять, удалять и перетаскивать
      предметы в своем инвентаре.
    </p>
    <button
      type="button"
      class="frame__button"
      title="Скрыть информацию"
      @click="toggleModal"
    >
      <img
        src="../../images/close.svg"
        alt="close-btn"
        class="frame__button-img"
      />
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
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
  border: none;
  background: none;
}

.frame__text {
  margin: 0;
}

.frame__button-img:hover {
  opacity: 0.8;
}
</style>
