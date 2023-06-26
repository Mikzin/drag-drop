<template>
  <div class="item" draggable="true">
    <img class="item__image" :src="image" />
    <p class="item__quantity">{{ quantity }}</p>
  </div>
</template>

<script>
export default {
  props: ['quantity', 'image'],
};
</script>

<style lang="scss" scoped>
.item {
  width: 103px;
  height: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: #3c3c3c;
    border: 1px solid #4d4d4d;
  }

  &:active {
    background-color: #3c3c3c;
  }

  &__image {
    width: 54px;
    height: 54px;
  }

  &__quantity {
    position: absolute;
    margin: 0;
    bottom: -1px;
    right: -1px;
    color: #ffffff;
    background: #262626;
    border: 1.5px solid #4d4d4d;
    border-right: none;
    border-bottom: none;
    border-radius: 6px 0px 0px 0px;
    opacity: 0.4;
    padding: 2px 4px;
  }
}
</style>
