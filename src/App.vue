<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap');
body{
  background-color: #ff8229;
  size: 100vw;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.49'%3E%3Cpolygon fill='%23ee6e36' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23dd5a44' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23cc4551' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23bb315f' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23aa1d6c' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
}
</style>
