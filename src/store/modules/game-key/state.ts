export interface GameKey {
  [name: string]: boolean;
}

export enum GameKeyEventType {
  UP,
  DOWN,
}

export default {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};
