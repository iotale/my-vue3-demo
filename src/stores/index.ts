import { createStore } from 'vuex';
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from './mutation-types';

interface State {
  count: number;
}

export default createStore({
  state(): State {
    return {
      count: 1,
    };
  },
  getters: {
    count(state: State) {
      return state.count;
    },
  },
  mutations: {
    changeCount(state: State, n) {
      state.count = n;
    },
  },
  actions: {
    [INCREMENT_MUTATION]({ commit, state }) {
      console.log(state);
      commit('changeCount', state.count + 1);
    },
    [DECREMENT_MUTATION]({ commit, state }) {
      commit('changeCount', state.count - 1);
    },
  },
});
