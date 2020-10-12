import store from '@/store/index';
import {
  VuexModule,
  Mutation,
  Module,
  getModule,
} from 'vuex-module-decorators';

export enum MovementKey {
  Up = 'ArrowUp',
  Down = 'ArrowDown',
  Left = 'ArrowLeft',
  Right = 'ArrowRight',
}

export enum GameKeyEventType {
  UP,
  DOWN,
}

interface KeyPressParameters {
  key: string;
  type: GameKeyEventType;
}

@Module({
  namespaced: true,
  name: 'gameInput',
  store,
  dynamic: true,
})
class GameInput extends VuexModule {
  public keys: {
    [name: string]: boolean;
  } = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  };

  @Mutation
  public keyPress(param: KeyPressParameters): void {
    this.keys[param.key] = param.type === GameKeyEventType.DOWN ? true : false;
  }
}

export default getModule(GameInput);
