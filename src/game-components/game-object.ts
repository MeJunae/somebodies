import Obstacle from './obstacle';

export interface GameObjectLocation {
  x: number;
  y: number;
}

export interface GameObjectSize {
  width: number;
  height: number;
}

export abstract class GameObject {
  public location: GameObjectLocation = {
    x: 0,
    y: 0,
  };

  public size: GameObjectSize = {
    width: 50,
    height: 50,
  }

  constructor(location?: GameObjectLocation, size?: GameObjectSize) {
    if (location) this.location = location;
    if (size) this.size = size;
  }

  public checkCollider(obstacle: Obstacle[]){
    obstacle.forEach((o) => {

    });
  }

  public moveUp(point = 1): void {
    this.location.y -= point;
  }

  public moveDown(point = 1): void {
    this.location.y += point;
  }

  public moveLeft(point = 1): void {
    this.location.x -= point;
  }

  public moveRight(point = 1): void {
    this.location.x += point;
  }

  public abstract draw(canvas: CanvasRenderingContext2D): void;
}
