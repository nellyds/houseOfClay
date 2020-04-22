<template>
  <div class="home">
    <v-container class="introContainer">
    <Intro />
    <About id="about" />
    <Treatment id="treatment" />
    <Services id="services"/>
    <Contact />
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue"
import About from "@/components/About.vue"
import Treatment from "@/components/Treatment.vue"
import Services from "@/components/Services.vue"
import Contact from "@/components/Contact.vue"
export default {
  name: "Home",
  components: {
    Intro,
    About,
    Treatment,
    Services,
    Contact
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
@media screen and (max-width: 415px){

}

</style>
