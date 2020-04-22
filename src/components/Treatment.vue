<template>
  <div class="Treatment">
      <v-container class="aboutContainer">
          <v-row cols="16">
              <v-col cols="16" sm="4" />
              <v-col cols="16" sm="4">
                <img data-aos="fade-left" data-aos-duration="1200" src="@/assets/fieldSquare.png" />
              </v-col>
              <v-col cols="16" sm="4" />
          </v-row>
      </v-container>
  </div>
</template>

<script>

export default {
  name: "Treatment",
  components: {
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
.Treatment{
    background-color:rgb(119, 191, 204)
}
@media screen and (max-width:415px){
    .aboutContainer{

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
