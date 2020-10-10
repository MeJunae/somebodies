<template>
  <div id="app">
    <MainCanvas msg="Welcome to Your Vue.js App" />
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
