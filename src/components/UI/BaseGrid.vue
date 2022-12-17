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
import { onMounted, ref } from 'vue';
import BaseCell from './BaseCell.vue';
import BaseModal from './BaseModal.vue';
import BaseItem from './BaseItem.vue';

import item1 from '../../images/rect1.png';
import item2 from '../../images/rect2.png';
import item3 from '../../images/rect3.png';

export default {
  components: { BaseCell, BaseModal, BaseItem },
  emits: ['close'],

  setup() {
    const cells = ref([
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
    ]);
    const isClosed = ref(true);
    const imageItem = ref(null);
    const id = ref(null);
    const qty = ref(null);
    const inputValue = ref('');
    const data = ref([]);
    const images = ref([item1, item2, item3]);

    function getInput(evt) {
      inputValue.value = evt.data;
    }
    function getImg(item) {
      imageItem.value = item.image;
    }

    function deleteItem() {
      if (qty.value - inputValue.value <= 0) {
        data.value = data.value.filter((item) => item.id !== id.value);
        postData(data.value);
        toggleModal();
      } else {
        data.value.forEach((item) => {
          if (item.quantity === qty.value) {
            item.quantity = item.quantity - inputValue.value;
          }
        });
        postData(data.value);
        toggleModal();
      }
    }

    function toggleModal() {
      isClosed.value = !isClosed.value;
    }

    function startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move';
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('itemID', item.id);
    }

    function onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = data.value.find((item) => item.id == itemID);
      item.id = list;
      postData(data.value);
    }
    function getId(item) {
      id.value = item.id;
    }
    function getQty(item) {
      qty.value = item.quantity;
    }
    async function getData() {
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
      data.value = responseData;

      for (let i = 0; i < images.value.length; i++) {
        data.value[i].image = images.value[i];
      }
    }

    async function postData(data) {
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

      data.value = responseData;
    }

    onMounted(() => {
      getData();
    });

    return {
      cells,
      getInput,
      getImg,
      deleteItem,
      toggleModal,
      startDrag,
      onDrop,
      getId,
      getQty,
      getData,
      postData,
      isClosed,
      imageItem,
      id,
      qty,
      inputValue,
      data,
    };
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
