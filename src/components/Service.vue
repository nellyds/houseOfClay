
<template>
<div v-ripple class="service" >
        <img class="serviceIcon selected" @click="overlay = !overlay" :src="require('@/assets/'+iconUrl)" >
         <v-overlay
            opacity=.8
            color="black"
            :value="overlay"
            :z-index="zIndex"
          >
            <div class="serviceDetail">
                <p class="article">{{name}}</p>
                <p>{{description}}</p>
                <v-btn
                    color="primary"
                    @click="overlay = false"
                >
                    Close
                </v-btn>
            </div>
          </v-overlay>
</div>
</template><script>
export default {
    name: "Service",
    data() {
        return{
        absolute: false,
        opacity: 1,
        overlay: false,
        zIndex: 5,
        }
    },
    props: {
        name: String,
        iconUrl: String,
        description: String
    },
    methods:{
    },
    mounted(){      
    }
}
</script>
<style scoped>
@media screen and (min-width: 416px){
}.serviceDetail{
    width: 500px;
    padding: 10px;
    background-color: white;
    color: black;
}
.serviceDetail img{
    width: 450px;
    height: auto;
}
@media screen and (max-width: 415px){
    .textCard{
    color: white;  
}
.serviceDetail{
    width: 350px;
    padding: 10px;
    background-color: white;
    color: black;
}
.serviceDetail img{
    width: 250px;
    height: auto;
}
.serviceIcon{
    width: 95x;
    height: 95px;
    padding: 10px;
}
.selected{

    border-top-left-radius: 10px;
}
.service{
    width: 110px;
    height: 110px;
    animation: enter .2; 
}
}
.textCard{
    color: white;
    
}
.serviceIcon{
    min-width: 100px;
    max-width: 100px;
    padding: 10px;
}
.selected{
    border-top-left-radius: 10px;
}
.service{
    width: 110px;
    height: 110px;
    animation: enter .2; 
}
@keyframe enter{
    from {opacity: 0%}
    to {opacity: 100%}
}
</style>