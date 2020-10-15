import { GameObject, GameObjectLocation, GameObjectSize } from './game-object';

export default class Obstacle extends GameObject {
  private _imageSource: string = "";
  get imageSource() {
    return this._imageSource;
  }
  set imageSource(v: string) {
    this._imageSource = v;
  }
  private img = new Image();

  constructor(location?: GameObjectLocation, size?: GameObjectSize, imageSource?: string) {
    super(location, size);
    if(imageSource){
      this._imageSource = imageSource;
    }
    this.img.src = this._imageSource;
    this.img.onload = () => {
      console.log("image load from source : " + this._imageSource);
    }
  }

  public draw(canvas: CanvasRenderingContext2D): void{
    canvas.drawImage(this.img, this.location.x, this.location.y, this.size.width, this.size.height);

    requestAnimationFrame(() => this.draw(canvas));
  }
}
