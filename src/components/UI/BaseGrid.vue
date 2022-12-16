<template>
  <div class="grid">
    <base-cell
      class="grid__item"
      v-for="(cell, index) in cells"
      :key="index"
      :id="index"
      @drop="onDrop($event, cell.id)"
      @dragover.prevent
      @dragenter.prevent
    >
      <base-item
        :image="item.image"
        @dragstart="startDrag($event, item)"
        v-for="item in data"
        :key="item.id"
        :quantity="item.quantity"
        v-show="item.id === cell.id"
        @click="
          toggleModal();
          getId(item);
          getImg(item);
          getQty(item);
        "
      ></base-item>
    </base-cell>
    <base-modal
      v-if="!isClosed"
      @close="toggleModal()"
      :image="imageItem"
      @delete="deleteItem"
      @onInput="getInput"
    ></base-modal>
  </div>
</template>

<script>
import BaseCell from './BaseCell.vue';
import BaseModal from './BaseModal.vue';
import BaseItem from './BaseItem.vue';

import item1 from '../../images/rect1.png';
import item2 from '../../images/rect2.png';
import item3 from '../../images/rect3.png';

export default {
  components: { BaseCell, BaseModal, BaseItem },
  emits: ['close'],

  data() {
    return {
      cells: [
        { id: 1, isItem: false },
        { id: 2, isItem: false },
        { id: 3, isItem: false },
        { id: 4, isItem: false },
        { id: 5, isItem: false },
        { id: 6, isItem: false },
        { id: 7, isItem: false },
        { id: 8, isItem: false },
        { id: 9, isItem: false },
        { id: 10, isItem: false },
        { id: 11, isItem: false },
        { id: 12, isItem: false },
        { id: 13, isItem: false },
        { id: 14, isItem: false },
        { id: 15, isItem: false },
        { id: 16, isItem: false },
        { id: 17, isItem: false },
        { id: 18, isItem: false },
        { id: 19, isItem: false },
        { id: 20, isItem: false },
        { id: 21, isItem: false },
        { id: 22, isItem: false },
        { id: 23, isItem: false },
        { id: 24, isItem: false },
        { id: 25, isItem: false },
      ],
      isClosed: true,
      imageItem: null,
      id: null,
      qty: null,
      inputValue: '',
      data: [],
    };
  },
  methods: {
    getInput(evt) {
      this.inputValue = evt.data;
    },
    getImg(item) {
      this.imageItem = item.image;
    },
    setQty(item) {
      item.quantity = this.qty;
    },
    deleteItem() {
      if (this.qty - this.inputValue <= 0) {
        this.data = this.data.filter((item) => item.id !== this.id);
        this.postData(this.data);
        this.toggleModal();
      } else {
        this.data.forEach((item) => {
          if (item.quantity === this.qty) {
            item.quantity = item.quantity - this.inputValue;
          }
        });
        this.postData(this.data);
        this.toggleModal();
      }
    },
    toggleModal() {
      this.isClosed = !this.isClosed;
    },
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move';
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('itemID', item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = this.data.find((item) => item.id == itemID);
      item.id = list;
      this.postData(this.data);
    },
    getId(item) {
      this.id = item.id;
    },
    getQty(item) {
      this.qty = item.quantity;
      console.log(this.qty);
    },

    async getData() {
      const response = await fetch(
        `https://inventory-353a7-default-rtdb.europe-west1.firebasedatabase.app/items.json`,
        {
          method: 'GET',
          body: JSON.stringify(),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to send request.'
        );
        throw error;
      }

      this.data = responseData;

      this.data[0].image = item1;
      this.data[1].image = item2;
      this.data[2].image = item3;

      console.log(this.data);
    },

    async postData(data) {
      const response = await fetch(
        `https://inventory-353a7-default-rtdb.europe-west1.firebasedatabase.app/items.json`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(
          responseData.message || 'Failed to send request.'
        );
        throw error;
      }

      this.data = responseData;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(5, 1fr);
  background-color: #262626;
  max-width: 525px;
  max-height: 500px;
  position: relative;
  overflow: hidden;

  &__item {
    display: flex;
    min-width: 102px;
    min-height: 98px;
    background-color: #262626;
  }
}
</style>
