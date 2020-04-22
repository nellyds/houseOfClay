<template>
  <div class="about">
      <v-container class="aboutContainer">
          <v-row cols="16">
              <v-col cols="16" sm="4">
              </v-col>
              <v-col cols="16" sm="4">
                <img data-aos="fade-left" data-aos-duration="1200" src="@/assets/houseBlank.png" />
              </v-col>
                            <v-col cols="16" sm="4">
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
  name: "About",
  components: {
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
@media screen and (max-width:415px){
    .aboutContainer{
    background-color: rgb(84,144,255);
    background-position-x: center;
    width: 100vw;
    min-height: 100vh;
}
.aboutContainer img{
    width: 350px;
    height: auto;
}
}
@media screen and (min-width:416px){
    .aboutContainer{
    background-color: rgb(84,144,255);
    background-position-x: center;
    width: 100vw;
    min-height: 100vh;
}
.aboutContainer img{
    width: 600px;
    height: auto;
}
}



</style>
