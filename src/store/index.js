import { createStore } from "vuex";

export default createStore({
  state: {
    colors: [
      { red: 10, green: 20, blue: 30 },
      { red: 20, green: 120, blue: 90 },
    ],
    mixtures: [
      {
        variant: "red",
        amount: 20,
      },
      {
        variant: "green",
        amount: 70,
      },
      {
        variant: "blue",
        amount: 40,
      },
    ],
  },
  mutations: {
    ADD_COLOR(state, color) {
      state.colors.push(color);
    },
    REMOVE_COLOR(state, index) {
      if (index >= 0 && index < state.colors.length) {
        state.colors.splice(index, 1);
      }
    },
    INCREMENT_COLOR(state, index) {
      if (index >= 0 && index < state.mixtures.length) {
        if (state.mixtures[index].amount === 100) return false;
        state.mixtures[index].amount++;
      }
    },
    DECREMENT_COLOR(state, index) {
      if (index >= 0 && index < state.mixtures.length) {
        if (state.mixtures[index].amount === 100) return false;
        state.mixtures[index].amount--;
      }
    },
    REFRESH_MIXTURES(state) {
      state.mixtures = state.mixtures.map((item) => ({ ...item, amount: 50 }));
    },
  },
  getters: {
    RGBColors(state) {
      return state.colors.map(
        (color) => `rgb(${color.red}, ${color.green}, ${color.blue})`
      );
    },
    RGBColorsLength(state) {
      return state.colors.length;
    },
    MixturesAmount(state) {
      return state.mixtures;
    },
  },
  actions: {
    addColor({ commit }, colors) {
      if (colors.length === 3) {
        const [red, green, blue] = colors.map((item) =>
          Math.floor(item.amount * 2.5)
        );
        commit("ADD_COLOR", { red, green, blue });
      }
    },
    refresh() {
      this.mixtures = this.mixtures.map((item) => ({ ...item, amount: 50 }));
    },
  },
});
