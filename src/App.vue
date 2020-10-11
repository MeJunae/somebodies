<template>
  <div id="app">
    <MainCanvas />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainCanvas from './components/MainCanvas.vue';

@Component({
  components: {
    MainCanvas,
  },
})
export default class App extends Vue {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #202020;
}
</style>
