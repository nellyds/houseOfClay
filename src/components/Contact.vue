<template>
  <div class="contact">
    <v-row>
      <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4"> </v-col>
      <v-col>
        <div class="card">
          <img
            @click="overlay = !overlay"
            class="serviceIcon"
            src="@/assets/medical-appointment.png"
          />
          <p style="font-family: 'Sunflower'; padding: 5px;">
            Send us a note: let us know how to get ahold of you to set up an
            appointment.
          </p>
          <p v-if="done" data-aos="fade-left" data-aos-duration="800" style="font-family: 'Sunflower'; padding: 5px;">
            Thanks for reaching out to us about starting your journey to wellness.  We will be in touch in less than 24 hours!
          </p>
        </div>
        <v-btn color="rgba(0,0,0,0)" @click="home">Home</v-btn>
        <transition name="flip">
          <v-overlay v-if="overlay" color="black" :value="overlay" :z-index="5">
            <div class="contactOverlay">
              <v-form
                v-if="showContact"
                ref="form"
                v-model="valid"
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
                  :counter="30"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  hint="Format: name@domain"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  hint="Format : ###-###-####"
                  label="Phone"
                ></v-text-field>
                <v-text-field
                  v-model="formMessage"
                  hint="What do you want to get from coming to House of Clay?"
                  label="Message"
                ></v-text-field>
                <v-btn @click="submit">Submit</v-btn>
                <v-btn @click="clear"> Clear Form </v-btn>
              </v-form>
            </div>
          </v-overlay>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      overlay: false,
      infoComplete: false,
      showContact: true,
      valid: true,
      letterFilled: false,
      done: false,
      name: "",
      email: "",
      phone: "",
      formMessage: "",
      emailRules: [v => /.+@.+\..+/.test(v) || "E-mail must be valid"],
      phoneRules: [
        v =>
          /^[2-9]\d{2}-\d{3}-\d{4}$/.test(v) ||
          "Phone number must be in valid format"
      ],
      message: {}
    };
  },
  computed:{
    goalList: function(){
      return this.$store.state.goals
    }
  },
  methods: {
    submit: function() {
      this.$http
        .post("https://nelsondsilva.pythonanywhere.com/hoc/message/dispatch", {
          name: this.name,
          phone: this.phone,
          email: this.email,
          formMessage: this.formMessage
        })
        .then(result => {
          window.alert(result.data.message);
          this.done = true;
        })
        .catch(() => {
          window.alert("Internal Service Error");
        });
      this.overlay = false;
    },
    clear: function() {
      (this.name = ""),
        (this.phone = ""),
        (this.email = ""),
        (this.phone = ""),
        (this.formMessage = ""),
        (this.overlay = false);
    },
    home: function() {
      this.$router.push({ path: "/" });
    },
    getGoals: function(){
      console.log(this.$store.state.goals)
    }
  }
};
</script>
<style scoped>
.serviceIcon {
  min-width: 100px;
  max-width: 100px;
  padding: 10px;
  border-radius: 15px;
  border: solid 2px white;
  background-color: rgba(11, 28, 37, 0.7);
  animation: pulse 2s infinite 2s;
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 0 rgba(255, 225, 255, 1);
  }
  70% {
    -moz-box-shadow: 0 0 0 10px rgba(255, 28, 28, 0.3);
    box-shadow: 0 0 0 10px rgba(255, 91, 15, 0.3);
  }
  100% {
    -moz-box-shadow: 0 0 0 0 rgb(255, 238, 0);
    box-shadow: 0 0 0 0 rgb(255, 238, 0);
  }
}
.card {
  padding: 10px;
  width: 330px;
  border-radius: 15px;
  border: solid 2px white;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 15px;
  text-align: center;
}
.letter {
  width: 300px;
  height: 300px;
}
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
.flip-enter {
  transform: scaleY(0);
}
.flip-enter-to {
  transform: scaleY(1);
}
.flip-enter-active {
  transition: transform 400ms ease-in-out;
}
.flip-leave {
  transform: scaleY(1);
}
.flip-leave-to {
  transform: scaleY(0);
}
.flip-leave-active {
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
