import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import googleMap from "../module/store/googleMapStore";
Vue.use(Vuex);
const modules = {
  GoogleMap: googleMap
};
export default new Vuex.Store({
  modules,
  plugins: [createPersistedState()]
});
