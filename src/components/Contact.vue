<template>
<div v-ripple class="contact" >

    <p class="header" @click="overlay =!overlay" text > Send us a message </p>
         <v-overlay
            opacity=.8
            color="black"
            :value="overlay"
            :z-index="5"
          >
            <div class="contactOverlay">
                <v-form 
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                >
                    <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="Email"
                    ></v-text-field>
                    <v-text-field
                        v-model="phone"
    
                        label="Phone"
                    ></v-text-field>
                    <v-text-field
                        v-model="formMessage"
                        label="Message"
                    ></v-text-field>
                    <p class="header"> Let us know a good time to contact you</p>
                    <v-date-picker v-model="datePicked"></v-date-picker>
                    <v-time-picker v-model="timePicked"></v-time-picker>
                <v-btn
                    color="primary"
                    @click="submit"
                >
                    Submit
                </v-btn>
                </v-form>
                {{message}}
            </div>
          </v-overlay>
</div>
</template>
<script>
export default {
    data(){
        return{
            overlay: false,
            valid: true,
            datePicked: null,
            timePicked: null,
            name:'',
            email:'',
            phone:'',
            formMessage:'',
            emailRules: [
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            message:{}
        }
    },
    methods:{
        submit: function(){
            this.$refs.form.validate();
            this.message['name'] = this.name;
            this.message['phone'] = this.phone;
            this.message['email'] = this.email;
            this.message['datePicked']= this.datePicked
            this.message['timePicked'] = this.timePicked
            this.message['message'] = this.formMessage
            console.log(this.message)
            this.overlay = false;
        }
    }
}
</script>
<style scoped>
.header{
        font-family: 'Kirang Haerang', cursive;
        font-size: 2em;
}
@media screen and (max-width: 415px){
    .contactOverlay{
        width: 375px;
        align-content: center;
    }
}
@media screen and (min-width:416px){
.contactOverlay{
        width: 600px;
        align-content: center;
    }
h1{
    font-size: 3em;
    margin-left: 10%;
    font-weight: 900;
}
}
</style>