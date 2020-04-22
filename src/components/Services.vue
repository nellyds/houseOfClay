<template>
  <div class="services">
      <v-container class="serviceContainer">
          <v-row cols="16">
              <v-col cols="16" sm="4" 
              v-for="service in services" v-bind:key="service.name">
                <Service v-bind:description="service.description" v-bind:iconUrl="service.iconUrl" />
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import Service from "@/components/Service";
export default {
  name: "Services",
  components: {
      Service
  },
  data(){
      return{
          services:[
              {name: 'Consultation', iconUrl:'bird.png', description: 'We will think about how to descrine this later'},
              {name: 'Medication', iconUrl:'house.png', description: 'We will think about how to descrine this later'},
              {name: 'Gestalt', iconUrl:'mentalColor.png', description: 'We will think about how to descrine this later'},
              {name: 'Talk', iconUrl:'talk.png', description: 'We will think about how to describe this later'},
              {name: 'I dont know', iconUrl:'calendar.png', description: 'We will think about how to describe this later'},
              {name: 'I dont know either', iconUrl:'mountain.png', description: 'We will think about how to describe this later'},
          ]
      }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
.services{
    background-color:rgb(119, 191, 204)
}
@media screen and (max-width:415px){
    .serviceContainer{

    background-position-x: center;
    width: 100vw;
    min-height: 100vh;
}
.serviceContainer img{
    width: 350px;
    height: auto;
}
}
@media screen and (min-width:416px){
    .serviceContainer{

    background-position-x: center;
    width: 100vw;
    min-height: 100vh;
}
.serviceContainer img{
    width: 600px;
    height: auto;
}
}



</style>
