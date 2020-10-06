<template>
  <div id="app">
    <MainCanvas msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import MainCanvas from './components/MainCanvas.vue';

export default {
  name: 'App',
  components: {
    MainCanvas,
  },
};
</script>
