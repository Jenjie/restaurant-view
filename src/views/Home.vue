<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-row justify="center">
      <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
          >
            Open Dialog
          </v-btn>
        </template>
        <profile-modal @submit="saveData"></profile-modal>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
  import ProfileModal from "../components/ProfileModal";
  export default {
    name: 'Home',

    components: {
        ProfileModal,
    },
      data(){
        return {
          dialog : false
        }
      },
      methods:{
        saveData(value){
            this.dialog = value;
        }
      }
  }
</script>
