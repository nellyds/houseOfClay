<template>
<div v-ripple class="contact" >
    <v-row

    >
        <v-col>
            <p class="header" @click="legalOverlay = !legalOverlay">Frequently Asked Questions</p>
          <v-overlay 
          color="white"
          opacity=1
          :value="legalOverlay"
          :z-index="5"
          >
                   <div style="color:black;" v-for="(faq,i) in faqs" v-bind:key="i">
                        <p>Q : {{faq.question}}</p>
                        <p>A : {{faq.answer}}</p>
                    </div>
                    <v-btn @click="legalOverlay = !legalOverlay">Done! </v-btn>
          </v-overlay>
    <p class="header" @click="overlay =!overlay" text > Send us a message </p>
         <v-overlay
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
                    <v-btn @click="overlay = !overlay">Done! </v-btn>
                </v-form>
            </div>
          </v-overlay>
          <p class="header" @click="timeOverlay = !timeOverlay">Let us know a good time to contact you.</p>
          <v-overlay 
          color="black"
          :value="timeOverlay"
          :z-index="5"
          >
                    <v-date-picker v-model="datePicked"></v-date-picker>
                    <v-time-picker v-model="timePicked"></v-time-picker>
                     <v-btn @click="timeOverlay = !timeOverlay">Done! </v-btn>
          </v-overlay>
          <v-btn color="primary" >submit</v-btn>
        </v-col>
    </v-row>
</div>
</template>
<script>
export default {
    data(){
        return{
            overlay: false,
            timeOverlay:false,
            resumeOverlay: false,
            legalOverlay: false,
            valid: true,
            datePicked: null,
            timePicked: null,
            letterFilled: false,
            faqs:[{question: "Do you accept private insurance?", answer: "This is a cash paying office. We do not accept insurance."}, 
                {question: "Do you perform toxicology screens and Urinalysis?", answer: "Yes."},
                {question: "Another question", answer: "Another answer"},
                {question: "Is this the format of the frequently asked questions?", answer: "Yes, this is the format for presenting a Q and A"}
                ],
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
        width: 325px;
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