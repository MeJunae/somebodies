import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import gameKey from './modules/game-key/index';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'productin';

export default new Store({
  strict: debug,
  modules: {
    gameKey,
  },
});
