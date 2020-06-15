<template>
  <div>
    <v-row>
      <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4"> </v-col>
      <v-col>
        <div class="card">
          <img
            class="serviceIcon"
            @click="showFaq = !showFaq"
            src="@/assets/faq.png"
          />
          <p style="font-family: 'Sunflower'; padding: 5px;">
            Frequently Asked Questions
          </p>
          <transition name="flip">
            <div v-if="showFaq">
              <paginate-links
                class="list"
                for="questionPage"
                :simple="{
                  next: 'Next »',
                  prev: '« Back'
                }"
              ></paginate-links>
              <paginate name="questionPage" :list="faqs">
                <div
                  style="color:white; width=100%"
                  v-for="(item, i) in paginated('questionPage')"
                  v-bind:key="i"
                >
                  <v-card
                    class="question"
                    style="padding:5px; margin: 5px;"
                    width="100%"
                  >
                    <p class="q">
                      <span style="font-weight: bold; font-size: 2.1em;"
                        >Q</span
                      >
                      :
                      <span style="font-size: 1.6em;">{{ item.question }}</span>
                    </p>
                    <p>A : {{ item.answer }}</p>
                  </v-card>
                </div>
              </paginate>
            </div>
          </transition>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "FAQ",
  data() {
    return {
      showFaq: false,
      colors: [
        "rgb(200,20,150)",
        "rgb(210,30,110)",
        "rgb(220,40,70)",
        "rgb(230,50,30)",
        "rgb(240,60,0)"
      ],
      paginate: ["questionPage"],
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
        },
        {
          question: "Do you perform toxicology screens and Urinalysis?",
          answer: "Yes."
        },
        {
          question: "Do you perform toxicology screens and Urinalysis?",
          answer: "Yes."
        }
      ]
    };
  }
};
</script>
<style scoped>
li {
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul {
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
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
.q {
  font-family: "Kirang Haerang";
}
.letter {
  width: 300px;
  height: 300px;
}
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
@media screen and (max-width: 415px) {
  .contactOverlay {
    width: 325px;
  }
  .question {
    font-size: 1.1em;
    border: 25px;
  }
}
@media screen and (min-width: 416px) {
  .contactOverlay {
    width: 600px;
    align-content: center;
  }
  h1 {
    margin-left: 10%;
    font-weight: 900;
  }
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
</style>
