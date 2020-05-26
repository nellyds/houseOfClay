<template>
  <div class="philosophy">
    <p class="header">Ok, but what actually happens?</p>
    <div style="height:40px;" />
    <v-carousel
      class="carouselContainer"
      cycle
      height="$vuetify.breakpoint.smAndDown? 400 : 800"
      hide-delimiters
      show-arrows-on-hover
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
            "A thorough evaluation is done. Initial goals are established: both short term and long term goals.",
          imageUrl: "house1.png"
        },
        {
          content:
            "Treatment can then be determined: counseling? Medically assisted treatment? Exercise? Nutrition? Pain management?",
          imageUrl: "house2.png"
        },
        {
          content:
            "We highly encourage AA and NA meetings. Referrals for specialized care depends on the individual needs.",
          imageUrl: "house3.png"
        },
        {
          content: "A fourth slide of equally important content.",
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
  .carouselContainer{
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
    height: 30vh
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
  }
  .aboutCircle p {
    color: black;
  }
}
</style>
