<template>
  <div class="frame">
    <p class="frame__text">
      Приложение представляет собой инвентарь, разработанный для оптимального
      управления предметами и айтемами. SPA обеспечивает удобный и интуитивно
      понятный интерфейс, позволяющий легко добавлять, удалять и перетаскивать
      предметы в своем инвентаре.
    </p>
    <img
      src="../../images/close.svg"
      alt="close-btn"
      class="frame__button"
      title="Скрыть информацию"
    />
  </div>
</template>

<style scoped>
.frame {
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  padding: 18px 68px 18px 18px;
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
