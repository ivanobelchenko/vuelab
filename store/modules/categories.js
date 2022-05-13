const state = () => ({
  categories: null,
})

const getters = {
  CATEGORIES: (state) => {
    return state.categories;
  },
};

const mutations = {
  SET_CATEGORIES: (state, payload) => {
    state.categories = payload;
  },
};

const actions = {
  GET_CATEGORIES: async (context) => {
    await fetch("https://demo-api.vsdev.space/api/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          context.commit("SET_CATEGORIES", result);
        },
        (error) => {
          console.log(error);
        }
      );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
