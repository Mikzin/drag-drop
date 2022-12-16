<template>
  <div class="grid">
    <div class="grid__item" v-for="(cell, indx) in cells" :key="indx">
      <base-cell v-for="item in cell" :key="item.id"></base-cell>
    </div>
  </div>
</template>

<script>
import BaseCell from './BaseCell.vue';

import item1 from '../../images/rect1.png';
import item2 from '../../images/rect2.png';
import item3 from '../../images/rect3.png';

export default {
  components: { BaseCell },

  data() {
    return {
      cells: [
        [
          { id: 1, isItem: false },
          { id: 2, isItem: false },
          { id: 3, isItem: false },
          { id: 4, isItem: false },
          { id: 5, isItem: false },
        ],
        [
          { id: 6, isItem: false },
          { id: 7, isItem: false },
          { id: 8, isItem: false },
          { id: 9, isItem: false },
          { id: 10, isItem: false },
        ],
        [
          { id: 11, isItem: false },
          { id: 12, isItem: false },
          { id: 13, isItem: false },
          { id: 14, isItem: false },
          { id: 15, isItem: false },
        ],
        [
          { id: 16, isItem: false },
          { id: 17, isItem: false },
          { id: 18, isItem: false },
          { id: 19, isItem: false },
          { id: 20, isItem: false },
        ],
        [
          { id: 21, isItem: false },
          { id: 22, isItem: false },
          { id: 23, isItem: false },
          { id: 24, isItem: false },
          { id: 25, isItem: false },
        ],
      ],
      items: [
        { image: item1, quantity: 4, id: 1 },
        { image: item2, quantity: 2, id: 2 },
        { image: item3, quantity: 5, id: 3 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-direction: column;
  background-color: #262626;
  max-width: 525px;
  max-height: 500px;

  &__item {
    display: flex;
    min-width: 105px;
    min-height: 100px;
    background-color: #262626;
  }
}
</style>
