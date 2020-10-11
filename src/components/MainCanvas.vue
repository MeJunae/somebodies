<template>
  <canvas id="game" width="800" height="500"></canvas>
</template>

<script lang="ts">
import Character from '@/game-components/character';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { GameKeyEventType } from '@/store/modules/game-key/state';
import { GameKeyMutation } from '@/store/modules/game-key/mutations';

@Component
export default class MainCanvas extends Vue {
  private canvas!: CanvasRenderingContext2D;

  constructor() {
    super();
  }

  mounted() {
    const htmlCanvasElement = <HTMLCanvasElement>(
      document.getElementById('game')
    );

    this.canvas = htmlCanvasElement.getContext('2d')!;

    requestAnimationFrame(() => this.render);

    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  }

  render() {
    this.canvas.rect(0, 0, 300, 300);
  }

  keyDown(e: KeyboardEvent) {
    this.$store.commit(GameKeyMutation.KEY_ACTION, {
      key: e.key,
      type: GameKeyEventType.DOWN,
    });
  }

  keyUp(e: KeyboardEvent) {
    this.$store.commit(GameKeyMutation.KEY_ACTION, {
      key: e.key,
      type: GameKeyEventType.UP,
    });
  }
}
</script>

<style scoped>
canvas {
  background-color: #fff;
}
</style>
