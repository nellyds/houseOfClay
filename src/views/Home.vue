<template>
  <div class="home">
    <v-container class="introContainer">
    <Intro />
    </v-container>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,224L26.7,208C53.3,192,107,160,160,138.7C213.3,117,267,107,320,133.3C373.3,160,427,224,480,250.7C533.3,277,587,267,640,224C693.3,181,747,107,800,112C853.3,117,907,203,960,202.7C1013.3,203,1067,117,1120,96C1173.3,75,1227,117,1280,154.7C1333.3,192,1387,224,1413,240L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
</svg>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue"
export default {
  name: "Home",
  components: {
    Intro
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
@media screen and (max-width: 415px){
  .introContainer{
    margin-left: 0%; 
  }
}
.introContainer{
  margin-left:25%;
}
</style>
