<template>
  <div class="service">
    <v-row>
      <div class="card animation">
        <img
          @click="showDescription = !showDescription"
          class="serviceIcon"
          :src="require('@/assets/' + iconUrl)"
        />
        <transition name="fade">
          <p v-if="!showDescription" class="serviceName">{{ name }}</p>
        </transition>
        <transition name="fade">
          <p class="serviceDescription" v-if="showDescription">
            {{ description }}
          </p>
        </transition>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Service",
  data() {
    return {
      showDescription: false
    };
  },
  props: {
    name: String,
    iconUrl: String,
    description: String
  },
  methods: {}
};
</script>
<style scoped>
.serviceIcon {
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
    box-shadow: 0 0 0 0 rgb(255, 238, 0);
  }
}
.card {
  padding: 10px;
  width: 330px;
  border-radius: 15px;
  border: solid 2px white;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 15px;
  text-align: center;
}
.roll-enter {
  opacity: 0;
  transform: translateY(-200px);
}
.roll-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.roll-enter-active {
  transition: opacity, transform 800ms ease-out;
}
.roll-leave {
  opacity: 1;
  transform: translateY(0px);
}
.roll-leave-to {
  opacity: 1;
  transform: translateY(-200px);
}
.roll-leave-active {
  transition: opacity, transform 200ms ease-out;
}
.fade-enter {
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
.fade-leave {
  opacity: 1;
  transform: scaleX(1);
}
.fade-leave-to {
  opacity: 0;
  transform: scaleX(0);
}
.fade-leave-active {
  transition: opacity, transform 400ms ease-out;
}
@media screen and (max-width: 415px) {
  .serviceName {
    text-align: center;
    font-size: 1.4em;
    font-family: "Sunflower";
  }
  .serviceDescription {
    text-align: center;
    font-size: 1em;
    font-family: "Sunflower";
    width: 100%;
    border-radius: 15px;
    background-color: rgba(255, 225, 255, 1);
    border: solid 2px white;
    padding: 10px;
  }
  .blank {
    display: none;
  }
  .textCard {
    color: white;
  }
  .card {
    padding: 10px;
    border-radius: 5%;
    border: solid 2px white;
  }
  .serviceIcon {
    width: 95x;
    height: 95px;
    padding: 10px;
    border-radius: 25%;
  }

  .service {
    width: 330px;
    animation: enter 0.2;
  }
}
@media screen and (min-width: 416px) {
  .serviceName {
    text-align: center;
    font-size: 1.4em;
    font-family: "Sunflower";
  }
  .serviceDescription {
    text-align: center;
    font-size: 1.4em;
    font-family: "Sunflower";
  }
  .serviceIcon {
    min-width: 100px;
    max-width: 100px;
    padding: 10px;
    border-radius: 50px;
    border: solid 2px white;
    background-color: rgba(43, 128, 177, 0.7);
  }
  .card {
    width: 100%;
    height: 300px;
    border-radius: 5%;
    border: solid 2px white;
    background-color: rgba(255, 255, 255, 0.7);
    margin: 15px;
  }

  .service {
    height: 330px;
  }
  .roll-enter {
    opacity: 0;
    transform: translateY(-200px);
  }
  .roll-enter-to {
    opacity: 1;
    transform: translateY(0px);
  }
  .roll-enter-active {
    transition: opacity, transform 800ms ease-out;
  }
  .roll-leave {
    opacity: 1;
    transform: translateY(0px);
  }
  .roll-leave-to {
    opacity: 1;
    transform: translateY(-200px);
  }
  .roll-leave-active {
    transition: opacity, transform 200ms ease-out;
  }
}
</style>
