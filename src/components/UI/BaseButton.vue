<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: #fa7272;
  border-radius: 8px;
  padding: 11px 55px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-bottom: 18px;

  &:hover {
    opacity: 0.8;
  }
}
</style>
