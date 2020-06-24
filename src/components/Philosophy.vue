<template>
  <div class="philosophy">
    <p class="header">Ok, but what actually happens?</p>
    <div style="height:40px;" />
    <v-carousel
      class="carouselContainer"
      cycle
      height="$vuetify.breakpoint.smAndDown? 400 : 800"
    >
      <v-carousel-item v-for="(step, i) in steps" :key="i">
        <v-sheet height="100%" color="rgba(255,255,255,0)">
          <v-row align="center" justify="center">
            <div class="aboutCircle">
              <p>{{ step.content }}</p>
            </div>
          </v-row>
          <div style="height:50px;" />
          <v-row align="center" justify="center">
            <v-card color="rgba(255,255,255,.1">
              <img :src="require('@/assets/' + step.imageUrl)" />
            </v-card>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      steps: [
        {
          content:
            "The journey starts with an introduction.  Who are you?  What brought you here?  Where do you want to go?  What would you like help with?",
          imageUrl: "house1.png"
        },
        {
          content:
            "Next, a treatment plan is determined based on your needs.  For some Medically Assissted Treatment may be necessary; for others counseling alone may suffice.  Whatever is needed will be determined by the patients needs and goals.",
          imageUrl: "house2.png"
        },
        {
          content:
            "We encourage outside participation in AA, NA, and other recovery fellowships.  Joining communities of recovery is a helpful, but not solely sufficient, means of recovery.",
          imageUrl: "house3.png"
        },
        {
          content:
            "As your journey to wellness progresses, we will work with you as you reassess your life, whether it be your medication regimen or your goals in recovery.  Work does not finish, and you connection does not end!",
          imageUrl: "house4.png"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap");
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
@media screen and (min-width: 1101px) {
  .carouselContainer {
    margin-left: 40%;
  }
  img {
    width: 700px;
  }
}
.philosophy {
  background-attachment: fixed;
  height: 100vh;
  background-size: cover;
}

.aboutCircle {
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: solid 2px white;
  font-size: 1.2em;
  max-width: 520px;
}
.aboutCircle p {
  font-family: "Sunflower";
  color: black;
}
.treatmentSteps {
  display: flex;
  flex-direction: column;
}
.stepImage {
  height: 200px;
  width: auto;
}
@media screen and (max-width: 1100px) {
  img {
    width: 350px;
  }
}
.philosophy {
  background-attachment: fixed;
  height: 100vh;
  background-size: cover;
}

.aboutCircle {
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  border: solid 2px white;
  font-size: 1.2em;
  max-width: 520px;
}
.aboutCircle p {
  font-family: "Sunflower";
  color: black;
}
.treatmentSteps {
  display: flex;
  flex-direction: column;
}
.stepImage {
  height: 200px;
  width: auto;
}
@media screen and (max-width: 415px) {
  img {
    height: 30vh;
  }
  .philosophy {
    background-attachment: fixed;
    background-size: cover;
  }
  .step {
    background-image: linear-gradient(
      white,
      rgba(210, 99, 214, 0.5)
    ); /* Standard syntax (must be last) */

    color: black;
  }
  .treatmentSteps {
    display: flex;
    flex-direction: column;
  }
  .aboutCircle {
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border: solid 2px white;
    font-size: 1.2em;
    max-width: 320px;
  }
  .aboutCircle p {
    color: black;
  }
}
</style>
