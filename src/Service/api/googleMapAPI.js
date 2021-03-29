import Service from "../Service";

const googleMapAPI = {
    getGoogleMapAPI(location){
        console.log(`/get_near_by_restaurant?location=${location}`);
        return Service.get(`/get_near_by_restaurant?location=${location}`);
    },
};

export default googleMapAPI
