import { MovementKey } from './../store/modules/game-input';
import { GameObject, GameObjectLocation, GameObjectSize } from './game-object';
import gameInput from '@/store/modules/game-input';

export default class Character extends GameObject {
  constructor(location?: GameObjectLocation, size?: GameObjectSize) {
    super(location, size);
  }

  public draw(canvas: CanvasRenderingContext2D): void {
    canvas.fillStyle = '#f50000';
    canvas.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);
    canvas.fillRect(this.location.x, this.location.y, this.size.width, this.size.height);

    if (gameInput.keys[MovementKey.Up]) this.moveUp();

    if (gameInput.keys[MovementKey.Down]) this.moveDown();

    if (gameInput.keys[MovementKey.Left]) this.moveLeft();

    if (gameInput.keys[MovementKey.Right]) this.moveRight();

    requestAnimationFrame(() => this.draw(canvas));
  }
}
