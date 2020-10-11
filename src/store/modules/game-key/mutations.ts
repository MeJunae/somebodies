import { MutationTree } from 'vuex';
import { GameKey, GameKeyEventType } from './state';

export enum GameKeyMutation {
  KEY_ACTION = 'KEY_ACTION',
}

interface Mutations<GameKey> {
  [GameKeyMutation.KEY_ACTION](
    state: GameKey,
    payload: {
      key: string;
      type: GameKeyEventType;
    }
  ): void;
}

const mutations: MutationTree<GameKey> & Mutations<GameKey> = {
  [GameKeyMutation.KEY_ACTION](state, payload) {
    state[payload.key] = payload.type === GameKeyEventType.DOWN ? true : false;
  },
};

export default mutations;
