<template>
<div v-ripple class="contact" >

    <p @click="overlay =!overlay" text > Send us a message </p>
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
                        v-model="message"
                        label="Message"
                    ></v-text-field>

                <v-btn
                    color="primary"
                    @click="submit"
                >
                    Submit
                </v-btn>
                </v-form>
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
            name:'',
            email:'',
            phone:'',
            message:'',
            emailRules: [
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    methods:{
        submit: function(){
            this.$refs.form.validate();
            window.alert(this.name+ this.email+ this.phone+ this.message)
            this.overlay = false;
        }
    }
}
</script>
<style scoped>
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