import Vuex from "vuex";
import comments from "./modules/comments";
import users from "./modules/users";
import api from "./modules/api"
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
    name: "store",
    namespaced: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
      comments,
      users,
      api
    },
    plugins: [createPersistedState()],
  },
  
)
