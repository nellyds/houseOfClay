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
                    <v-row cols="16">
              <v-col cols="16" sm="4" />
              <v-col cols="16" sm="4">
                  <v-card shaped=true >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </v-card>
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
    background-color:rgb(119, 191, 204);
    background-size: 100vw;
}
@media screen and (max-width:415px){
    .aboutContainer{
font-family: 'Sunflower', sans-serif;
    background-position-x: center;
    width: 100vw;
     background-image:url('~@/assets/gradient.png');
    min-height: 100vh;
}
.aboutContainer img{
    width: 350px;
    height: auto;
}
}
@media screen and (min-width:416px){
    .aboutContainer{
font-family: 'Sunflower', sans-serif;
    background-position-x: center;
    width: 100vw;
    min-height: 100vh;
     background-image:url('~@/assets/gradient.png');
}
.aboutContainer img{
    width: 600px;
    height: auto;
}
}



</style>
