<template>
  <canvas id="game" width="800" height="500"></canvas>
</template>

<script>
export default {
  name: 'MainCanvas',
  props: {
    msg: String,
  },
  data: () => {
    return {
      canvas: null,
      currentSecond: 0,
      frameCount: 0,
      frameLastSecond: 0,
      lastFrameTime: 0,
      tile: {
        width: 40,
        height: 40,
      },
      map: {
        width: 10,
        height: 10,
      },
      // prettier-ignore
      gameMap: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
        0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
        0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
        0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]
    };
  },
  mounted() {
    this.canvas = document.getElementById('game').getContext('2d');
    requestAnimationFrame(this.drawGame);

    this.canvas.font = 'bold 10pt sans-serif';
  },
  methods: {
    drawGame() {
      if (this.canvas === null) return;

      var sec = Math.floor(Date.now() / 1000);

      if (sec != this.currentSecond) {
        this.currentSecond = sec;
        this.frameLastSecond = this.frameCount;
        this.frameCount = 1;
      } else {
        this.frameCount++;
      }

      for (var y = 0; y < this.map.height; y++) {
        for (var x = 0; x < this.map.width; x++) {
          switch (this.gameMap[y * this.map.width + x]) {
            case 0:
              this.canvas.fillStyle = '#999';
              break;
            default:
              this.canvas.fillStyle = '#eee';
          }

          this.canvas.fillRect(
            x * this.tile.width,
            y * this.tile.height,
            this.tile.width,
            this.tile.height
          );
        }
      }

      this.canvas.fillStyle = '#f00';
      this.canvas.fillText('FPS: ' + this.frameLastSecond, 10, 20);

      requestAnimationFrame(this.drawGame);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
