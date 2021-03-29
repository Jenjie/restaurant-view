<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">User Profile</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="first name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field label="last name*" persistent-hint required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6"><v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Age*"
                                    required
                            ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-autocomplete
                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                    label="Interests"
                                    multiple>
                            </v-autocomplete>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="submitData"
                >
                    Close
                </v-btn>
                <v-btn
                        color="blue darken-1"
                        text
                        @click="cancelData"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
    export default {
        name: "ProfileModal",
        data () {
            return {
                dialog: false,
            }
        },
        methods:{
            submitData(){
                this.dialog = false;
                this.$emit('submit',this.dialog);
            },
            cancelData(){
                this.dialog = false;
                this.$emit('submit',this.dialog);
            },
        }
    }
</script>

<style scoped>

</style>