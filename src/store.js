import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bgm: null,
    playIcon: true
  },
  mutations: {
    setBgm: function(state, ref) {
      state.bgm = ref;
    },
    playMusic(state, status) {
      console.log(status);
      if (status === "play") {
        state.playIcon = false;
        console.log(state);
      } else if (status === "pause") {
        state.playIcon = true;
      }
    }
  },
  actions: {}
});
