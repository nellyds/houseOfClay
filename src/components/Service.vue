
<template>
<div class="service" >
   
    <div class="card animation">
        <img  @click="showDescription = !showDescription" class="serviceIcon" :src="require('@/assets/'+iconUrl)" >
        <transition name="fade">
        <p class="serviceName" v-if="!showDescription">{{name}}</p>
        </transition>
        <transition name="fade">
        <p class="serviceDescription" v-if="showDescription">{{description}}</p>
        </transition>

    </div>
  
</div>
</template><script>
export default {
    name: "Service",
    data() {
        return{
            showDescription: false,
        }
    },
    props: {
        name: String,
        iconUrl: String,
        description: String
    },
    methods:{

    },
}
</script>
<style scoped>
@media screen and (min-width: 416px){
.serviceName{
    text-align: center;
    font-size: 1.4em;
    font-family: 'Sunflower';
}
.serviceDescription{
       text-align: center;
    font-size: 1em;
    font-family: 'Sunflower'; 
}
.serviceIcon{
    min-width: 100px;
    max-width: 100px;
    padding: 10px;
    border-radius: 50px;
    border: solid 2px white;
    background-color: rgba(43, 128, 177, 0.7);
}
.card{

    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: solid 2px white;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 15px;

}

.service{
    width: 330px;
    height: 330px;
    
}
.fade-enter{
    opacity: 0;
    transform: scaleX(0);
}
.fade-enter-to {
  opacity: 1;
  transform: scaleX(1);
}
.fade-enter-active {
  transition: opacity, transform 400ms ease-out;
}
.fade-leave{
    opacity:1;
    transform:scaleX(1)
}
.fade-leave-to{
    opacity: 0;
    transform: scaleX(0)
}
.fade-leave-active{
    transition: opacity, transform 400ms ease-out;
}
}

@media screen and (max-width: 415px){
    .serviceName{
    text-align: center;
    font-size: 1.4em;
    font-family: 'Sunflower';
}
.serviceDescription{
       text-align: center;
    font-size: 1em;
    font-family: 'Sunflower'; 
}
.blank{
    display: none;
}
    .textCard{
    color: white;  
}
.card{
    width: 100%;
    border-radius: 50%;
    border: solid 2px white;
}
.serviceIcon{
    width: 95x;
    height: 95px;
    padding: 10px;
    border-radius: 25%;
}

.service{
    width: 330px;
    height: 330px;
    animation: enter .2; 
}
}
.fade-enter{
    opacity: 0;
    transform: scaleX(0);
}
.fade-enter-to {
  opacity: 1;
  transform: scaleX(1);
}
.fade-enter-active {
  transition: opacity, transform 400ms ease-out;
}
.fade-leave{
    opacity:1;
    transform:scaleX(1)
}
.fade-leave-to{
    opacity: 0;
    transform: scaleX(0)
}
.fade-leave-active{
    transition: opacity, transform 400ms ease-out;
}
.serviceIcon{
    min-width: 100px;
    max-width: 100px;
    padding: 10px;
    border-radius: 50px;
    border: solid 2px white;
    background-color: rgba(43, 128, 177, 0.7);
    animation: pulse 2s infinite 2s;
}
@keyframes pulse {
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    box-shadow: 0 0 0 0 rgba(255, 225, 255, 1);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(255, 28, 28, 0.3);
      box-shadow: 0 0 0 10px rgba(255, 91, 15, 0.3);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgb(255, 238, 0);
      box-shadow: 0 0 0 0 rgb(255, 238, 0);;
  }
}
.card{
    width: 300px;
    height: 300px;
    border-radius: 150px;
    border: solid 2px white;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 15px;

}
.service{
    width: 330px;
    height: 330px;
    animation: enter .2; 
}

</style>