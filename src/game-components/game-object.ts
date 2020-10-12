export interface GameObjectLocation {
  x: number;
  y: number;
}

export abstract class GameObject {
  public location: GameObjectLocation = {
    x: 0,
    y: 0,
  };

  constructor(location?: GameObjectLocation) {
    if (location) this.location = location;
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
