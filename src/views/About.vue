<template>
  <div class="about">
    <div class="col" style="text-align: center">
      <vue-google-autocomplete
        ref="address"
        id="map"
        classname="form-control"
        placeholder="Please input location for search restaurant"
        v-on:placechanged="getAddressData"
        country="TH"
      >
      </vue-google-autocomplete>
    </div>
    <template v-for="(data,key)in result">
      <div class="row" v-bind:key="key">
        <template v-for="(item,index) in data">
          <div class="col-4" v-bind:key="index">
            <v-card class="mx-auto my-12" max-width="374">
              <template v-if="item.photos && item.photos[0].photo_reference">
                <v-img
                  height="250"
                  :src="getPhotoAPI(item.photos[0].photo_reference)"
                ></v-img>
              </template>
              <template v-else>
                <v-img
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
              </template>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-text>
                <v-row align="center" class="mx-0">
                  <v-rating
                    :value="item.rating"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>

                  <div class="grey--text ml-4">
                    {{ item.rating }} ({{ item.user_ratings_total }})
                  </div>
                </v-row>
                <br />
                <div>
                  <template v-if="item.geometry && item.geometry.location">
                    <b>ตำแหน่ง</b> {{ item.geometry.location.lat }},{{
                      item.geometry.location.lng
                    }}
                  </template>
                  <template v-else>ตำแหน่ง -</template>
                </div>
                <div><b>ที่อยู่</b> {{ item.vicinity }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
            </v-card>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { mapState } from "vuex";
import { domain } from "../ConstantAPI";

export default {
  name: "About",
  components: {
    VueGoogleAutocomplete
  },
  data() {
    return {
      address: "",
      location: ""
    };
  },
  computed: {
    ...mapState({
      result: state => {
        return state.GoogleMap.restaurant_data;
      }
    })
  },
  created() {
    this.getGoogleMapAPI();
  },
  methods: {
    getPhotoAPI(photo_reference) {
      return `${domain}/get_photo_url?photo_reference=${photo_reference}`;
    },
    getGoogleMapAPI() {
      this.$store.dispatch("GoogleMap/getGoogleMapAPI", this.location);
    },
    getAddressData: function(addressData) {
      this.location = addressData.latitude + "," + addressData.longitude;
      this.getGoogleMapAPI();
    }
  }
};
</script>
<style>
.about {
  background-color: wheat;
}
.pac-target-input {
  width: 350px;
  height: 50px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 10px;
}
</style>
