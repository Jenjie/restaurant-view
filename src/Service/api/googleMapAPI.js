import Service from "../Service";

const googleMapAPI = {
  getGoogleMapAPI(location) {
    return Service.get(`/get_near_by_restaurant?location=${location}`);
  }
};

export default googleMapAPI;
