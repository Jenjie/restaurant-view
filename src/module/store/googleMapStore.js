import Service from "../../Service/index";

const googleMap = {
  namespaced: true,
  state: {
    restaurant_data: []
  },
  mutations: {
    SET_RESTAURANT_DATA: (state, response) => {
      state.restaurant_data = [];
      let results_data = response.results;
      let column_data = [];
      let i = 0;
      results_data.forEach(data_api => {
        if (i < 3) {
          column_data.push(data_api);
          i++;
        } else {
          state.restaurant_data.push(column_data);
          column_data = [];
          i = 0;
        }
      });
    }
  },
  actions: {
    getGoogleMapAPI({ commit }, location = "13.803181,100.5393292") {
      return Service.googleMapAPI.getGoogleMapAPI(location).then(res => {
        console.log(res);
        commit("SET_RESTAURANT_DATA", res);
      });
    }
  }
};

export default googleMap;
