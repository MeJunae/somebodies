<template>
  <canvas id="game" width="800" height="500"></canvas>
</template>

<script lang="ts">
import Character from '@/game-components/character';
import Obstacle from '@/game-components/obstacle';
import { Component, Prop, Vue } from 'vue-property-decorator';
import gameInput, { GameKeyEventType } from '@/store/modules/game-input';

@Component
export default class MainCanvas extends Vue {
  private canvas!: CanvasRenderingContext2D;

  constructor() {
    super();
  }

  public mounted(): void {
    const htmlCanvasElement = <HTMLCanvasElement>(
      document.getElementById('game')
    );

    this.canvas = htmlCanvasElement.getContext('2d')!;
    requestAnimationFrame(() => this.draw());
    var obstacles = [];
    obstacles.push(new Obstacle({x: 100, y: 100}, {width: 50, height: 50}, '/assets/table.png'));
    obstacles.forEach((o) => {o.draw(this.canvas)});

    window.addEventListener('keydown', this.keyDown);
    window.addEventListener('keyup', this.keyUp);
  }

  public draw(): void {
    const character = new Character();
    character.draw(this.canvas);
  }

  public keyDown(e: KeyboardEvent): void {
    gameInput.keyPress({
      key: e.key,
      type: GameKeyEventType.DOWN,
    });
  }

  public keyUp(e: KeyboardEvent): void {
    gameInput.keyPress({
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
