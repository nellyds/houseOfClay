<template>
  <div>
    <v-row>
      <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4" />
      <v-col>
        <div class="card">
          <p class="yes">
            <span class="s">Y</span>
            <span class="s">e</span>
            <span class="s">s</span>
            <span class="one">!</span>
          </p>
          <p>
            It does! Rather than explain how, listen to what past guests have
            said.
          </p>
          <img
            class="serviceIcon"
            @click="testimonialOverlay = !testimonialOverlay"
            src="@/assets/talk.png"
          />
        </div>

        <transition name="flip">
          <v-overlay
            color="black"
            v-if="testimonialOverlay"
            opacity=".3"
            :value="testimonialOverlay"
          >
            <div class="quoteHolder">
              <transition name="bounce">
                <div v-if="show" id="target" class="speech-bubble">
                  <p>{{ quote }}</p>
                </div>
              </transition>
            </div>
            <img @click="showQuote" src="@/assets/talk.png" />
            <v-btn text @click="testimonialOverlay = false">Done!</v-btn>
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
      statements: [
      ],
      show: false,
      testimonialNumber: 0,
      increment: -1,
      initial: true,
      testimonialOverlay: false,
      offsetTop: 0
    };
  },
  methods: {
    showQuote: function() {
      if (this.show == false) {
        this.show = true;
      } else {
        this.show = false;
        if (
          this.testimonialNumber == this.statements.length - 1 ||
          this.testimonialNumber == 0
        ) {
          this.increment *= -1;
        }
        this.testimonialNumber += this.increment;
      }
    },
  },
  computed: {
    quote: function() {
      console.log(this.statements)
      return this.statements[this.testimonialNumber].testimonial;
    }
  },    mounted(){
      this.$http.post('https://nelsondsilva.pythonanywhere.com/hoc/testimonial/get')
      .then(result =>{
        this.statements = result.data.result
      }).catch(error =>{
        console.log(error.message)
      })
    }
};
</script>
<style scoped>
.yes {
  margin-bottom: 0px;
}
.y {
  font-size: 1.4em;
}
.e {
  font-size: 1.8em;
}
.s {
  font-size: 2.3em;
}
.one {
  font-size: 2.7em;
}
.quoteHolder {
  min-height: 200px;
}
.serviceIcon {
  min-width: 100px;
  max-width: 100px;
  padding: 10px;
  border-radius: 50px;

  border: solid 2px white;
  background-color: rgba(43, 128, 177, 0.7);
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
  font-size: 1.4em;
  text-align: center;
  font-family: "Sunflower";
}
.house {
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 125px;
  height: 125px;
  margin-bottom: 0px;
}
.house img {
  width: 125px;
  height: 125px;

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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.header {
  font-family: "Sunflower", cursive;
  font-size: 2em;
}
.speech-bubble {
  position: relative;
  background: #ffffff;
  border-radius: 0.4em;
  padding: 15px;
  min-width: 300px;
  max-width: 800px;
  font-weight: bold;
  font-size: 1.4em;
  color: black;
  text-align: center;
  font-family: "Sunflower";
}

.speech-bubble:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 48px solid transparent;
  border-top-color: #ffffff;
  border-bottom: 0;
  border-left: 0;
  margin-left: -24px;
  margin-bottom: -48px;
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
