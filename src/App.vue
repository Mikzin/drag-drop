<template>
  <div class="main">
    <div class="container">
      <div class="inventory">
        <base-card></base-card>
        <base-grid></base-grid>
      </div>
      <base-frame></base-frame>
    </div>
  </div>
</template>

<script>
import BaseCard from './components/UI/BaseCard.vue';
import BaseGrid from './components/UI/BaseGrid.vue';
import BaseFrame from './components/UI/BaseFrame.vue';

export default {
  components: {
    BaseCard,
    BaseGrid,
    BaseFrame,
  },
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #1d1d1d;
  color: #fff;
}

.container {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.inventory {
  display: flex;
  gap: 24px;
}

.main {
  max-width: 849px;
  margin: 0 auto;
}
</style>
