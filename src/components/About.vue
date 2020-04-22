<template>
  <div class="about">
      <v-container class="aboutContainer">
          <v-row cols="16">
              <v-col data-aos="fade-left" data-aos-duration="1000" cols="16" sm="4">
                  <p class="aboutHeader" >Welcome to House of Clay!</p>
              </v-col>
              <v-col cols="16" sm="4">
                  <v-card shaped=true color="rgba(255,255,255,.2)" >
                <img data-aos="fade-left" data-aos-duration="1200" src="@/assets/houseBlank.png" />
                  </v-card>
              </v-col>
                <v-col data-aos="fade-right" data-aos-duration="1000" cols="16" sm="4">
                    <p class="aboutHeader" >What is House of Clay?</p>
              </v-col>
          </v-row>
                    <v-row cols="16">
              <v-col cols="16" sm="4">
              </v-col>
              <v-col cols="16" sm="4">
                  <v-card shaped=true color="rgba(255,255,255,.8)" >
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </v-card>
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
    background-image:url('~@/assets/gradient.png');
    width: 100vw;
    min-height: 100vh;
    font-family: 'Sunflower';
}
.aboutContainer img{
    width: 350px;
    height: auto;
}
.aboutHeader{
        font-family: 'Kirang Haerang', cursive;
        font-size: 2em;
}
}
@media screen and (min-width:416px){
    .aboutContainer{
    background-color: rgb(84,144,255);
    background-position-x: center;
        background-image:url('~@/assets/gradient.png');
    width: 100vw;
    min-height: 100vh;
    font-family: 'Sunflower';
}
.aboutContainer img{
    width: 100%;
    height: auto;
}
.aboutHeader{
        font-family: 'Kirang Haerang', cursive;
        font-size:3em;
        text-align: center;
}
}



</style>
