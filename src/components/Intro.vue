<template>
  <div class="intro">
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="flip-up" data-aos-duration="800" data-aos-delay="400" src="@/assets/background.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="fade-left" data-aos-duration="1800" data-aos-delay="2800" src="@/assets/middleShadow.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="700" src="@/assets/backMountain.png"></v-img>
    <v-img class="img" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="900" src="@/assets/middleMountain.png"> </v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1200" src="@/assets/foreMountain.png"> </v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="flip-up" data-aos-duration="1000" data-aos-delay="1500" src="@/assets/trees.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1700" src="@/assets/figure.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="slide-right" data-aos-duration="1000" data-aos-delay="2000" src="@/assets/cloud1.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="2200" src="@/assets/cloud2.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="slide-left" data-aos-duration="1000" data-aos-delay="2400" src="@/assets/cloud3.png"></v-img>
    <v-img class="img" data-aos-easing="ease-out-cubic" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="2600" src="@/assets/sun.png"></v-img>
     <v-img class="img" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="3000" src="@/assets/lighting.png"></v-img>
  </div>
</template>

<script>

export default {
  name: "Intro",
  components: {
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');


body{
font-family: 'Kirang Haerang', cursive;
color:white;
}
.img{
  position:absolute;
}
.text{
  font-family: 'Kirang Haerang', cursive;
  color: white;
  margin-top: 20%;
  margin-left: 50%;
font-size: 2em;
position: absolute;
}
.highlight{
  border: solid 3px white;
}
.header{
}


</style>
