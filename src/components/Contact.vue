<template>
  <div class="contact">
    <v-row>
      <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4"> </v-col>
      <v-col>

        <p class="header" @click="overlay = !overlay" text>Send us a message</p>
        <transition name="flip">
        <v-overlay v-if="overlay" color="black" :value="overlay" :z-index="5">
          <div class="contactOverlay">
            <v-form
              v-if="showContact"
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                class="header"
              >
                Who Are You?
              </p>
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
              <v-text-field v-model="phone" label="Phone"></v-text-field>
              <v-text-field
                v-model="formMessage"
                label="Message"
              ></v-text-field>
              <v-btn @click="submitContact">Done! </v-btn>
            </v-form>
          </div>
          <div v-if="showTime">
            <v-col>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                class="header"
              >
                What would be a good time to call you....
              </p>
              <v-time-picker
                color="rgb(55,165,189)"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="600"
                v-model="timePicked"
              ></v-time-picker>
            </v-col>
            <v-btn @click="timeSubmit">Done! </v-btn>
          </div>
          <div v-if="showDate">
            <v-col>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                class="header"
              >
                And on what day?
              </p>
              <v-date-picker
                color="rgb(55,165,189)"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="400"
                v-model="datePicked"
              />
            </v-col>
            <v-btn @click="dateSubmit">Done! </v-btn>
          </div>
          <div @click="overlay = !overlay">
            <p class="header">Looking forward to talking with you!</p>
            <img
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-delay="200"
              v-if="infoComplete"
              @click="overlay = !overlay"
              class="letter"
              src="@/assets/letter4.svg"
            />
          </div>
        </v-overlay>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>
<script>

export default {
  components:{
  },
  data() {
    return {
      showContact: true,
      showTime: false,
      showDate: false,
      resumeOverlay: false,
      overlay: false,
      legalOverlay: false,
      infoComplete: false,
      testimonialOverlay: false,
      valid: true,
      datePicked: null,
      timePicked: null,
      letterFilled: false,
      faqs: [
        {
          question: "Do you accept private insurance?",
          answer: "This is a cash paying office. We do not accept insurance."
        },
        {
          question: "Do you perform toxicology screens and Urinalysis?",
          answer: "Yes."
        },
        { question: "Another question", answer: "Another answer" },
        {
          question: "Is this the format of the frequently asked questions?",
          answer: "Yes, this is the format for presenting a Q and A"
        }
      ],
      name: "",
      email: "",
      phone: "",
      formMessage: "",
      emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      message: {}
    };
  },
  methods: {
    submit: function() {
      this.$refs.form.validate();
      this.message["name"] = this.name;
      this.message["phone"] = this.phone;
      this.message["email"] = this.email;
      this.message["datePicked"] = this.datePicked;
      this.message["timePicked"] = this.timePicked;
      this.message["message"] = this.formMessage;
      console.log(this.message);
      this.overlay = false;
    },
    timeSubmit: function() {
      if (this.timePicked != null) {
        this.showTime = false;
        this.showDate = true;
      }
    },
    submitContact: function() {
      if (
        this.name != null &&
        this.phone != null &&
        this.email != null &&
        this.message != null
      ) {
        this.showContact = false;
        this.showTime = true;
      }
    },
    dateSubmit: function() {
      if (this.datePicked != null) {
        this.showDate = false;
        this.infoComplete = true;
      }
    }
  }
};
</script>
<style scoped>
.letter {
  width: 300px;
  height: 300px;
}
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
.flip-enter{
    transform: scaleY(0);
}
.flip-enter-to{
    transform: scaleY(1);
}
.flip-enter-active{
    transition: transform 400ms ease-in-out;
}
.flip-leave{
    transform: scaleY(1)
}
.flip-leave-to{
    transform:scaleY(0)
}
.flip-leave-active{
    transition: transform 200ms ease-in-out;
}
@media screen and (max-width: 415px) {
  .contactOverlay {
    width: 325px;
  }
}
@media screen and (min-width: 416px) {
  .contactOverlay {
    width: 600px;
    align-content: center;
  }
  h1 {
    font-size: 3em;
    margin-left: 10%;
    font-weight: 900;
  }
}
</style>
