import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    firstTeam: "Delhi Capitals",
    secondTeam: "Chennai Super Kings",
    score: 0,
    wickets: 0,
    thisOver: [".", ".", ".", ".", ".", "."]
  },
  getters: {
    overStatsString: state => {
      return state.thisOver.join(" ");
    }
  },
  mutations: {
    addScoreMutation(state, score) {
      state.score += parseInt(score);
      Vue.set(state.thisOver, state.thisOver.indexOf("."), parseInt(score));
    }
  },
  actions: {
    addScoreAction(context, score) {
      context.commit("addScoreMutation", score);
    }
  }
});
