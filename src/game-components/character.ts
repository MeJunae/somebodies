import { GameObject } from './game-object';

export default class Character implements GameObject {
  private tileFrom: [number, number];
  private tileTo: [number, number];
  private timeMoved: number;
  private dimensions: [number, number];
  private position: [number, number];
  private delayMove: number;

  constructor(
    private readonly tileWidth: number,
    private readonly tileHeight: number
  ) {
    this.tileFrom = [1, 1];
    this.tileTo = [1, 1];
    this.timeMoved = 0;
    this.dimensions = [30, 30];
    this.position = [45, 45];
    this.delayMove = 700;
  }

  public placeAt(x: number, y: number): void {
    this.tileFrom = [x, y];
    this.tileTo = [x, y];
    this.position = [
      this.tileWidth * x + (this.tileWidth - this.dimensions[0]) / 2,
      this.tileHeight * y + (this.tileHeight - this.dimensions[1]) / 2,
    ];
  }

  public processMovement(t: number): boolean {
    if (
      this.tileFrom[0] === this.tileTo[0] &&
      this.tileFrom[1] === this.tileTo[1]
    )
      return false;

    if (t - this.timeMoved >= this.delayMove) {
      this.placeAt(this.tileTo[0], this.tileTo[1]);
    } else {
      this.position[0] =
        this.tileFrom[0] * this.tileWidth +
        (this.tileWidth - this.dimensions[0]) / 2;
      this.position[1] =
        this.tileFrom[1] * this.tileHeight +
        (this.tileHeight - this.dimensions[1]) / 2;

      if (this.tileTo[0] != this.tileFrom[0]) {
        const diff = (this.tileWidth / this.delayMove) * (t - this.timeMoved);

        this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
      }

      if (this.tileTo[1] != this.tileFrom[1]) {
        const diff = (this.tileHeight / this.delayMove) * (t - this.timeMoved);

        this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff;
      }

      this.position[0] = Math.round(this.position[0]);
      this.position[1] = Math.round(this.position[1]);
    }

    return true;
  }

  public draw(): void {
    throw new Error('Method not implemented.');
  }
}
