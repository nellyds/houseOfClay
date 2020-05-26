<template>
  <div class="intro">
    <div class="sunTarget">
      <p class="text" @click="$vuetify.goTo('#about')">About</p>
    </div>
    <div class="personTarget">
      <p @click="$vuetify.goTo('#treatment')">Say Hi</p>
    </div>
    <div class="cloudTarget">
      <p @click="$vuetify.goTo('#services')">What We DO</p>
    </div>
    <img class="intro" :src="require('@/assets/s.svg')" />
  </div>
</template>

<script>
export default {
  name: "Intro",
  components: {},
  methods: {
    about: function() {
      window.alert("reached");
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kirang+Haerang&display=swap");
@media screen  and (min-width: 1200px){
  .sunTarget {
    height: 15%;
    width: 15%;
    margin-left: 50px;
    margin-top: 200px;
  position: absolute;
  }
  .sunTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
    font-size: 3em;
  }

  .personTarget {
    height: 15%;
    width: 15%;
    margin-left: 30%;
    margin-top: 25%;
position: absolute;
  }
  .personTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
    font-size: 3em;
  }

  .cloudTarget {
    height: 15%;
    margin-left: 55%;
    margin-top: 30%;
    position: absolute;
  }
  .cloudTarget p {
    font-family: "Kirang Haerang", cursive;
    font-size: 3em;
  }
}
@media screen and (max-width: 1199px) {
  .sunTarget {
    height: 15%;
    width: 15%;
    margin-left: 50px;
    margin-top: 200px;
    position: absolute;
  }
  .sunTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
    font-size: 3em;
  }

  .personTarget {
    height: 15%;
    width: 15%;
    margin-left: 660px;
    margin-top: 350px;
    position: absolute;
  }
  .personTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
    font-size: 3em;
  }

  .cloudTarget {
    height: 15%;
    width: 15%;
    margin-left: 55%;
    margin-top: 20%;
    position: absolute;
  }
  .cloudTarget p {
    font-family: "Kirang Haerang", cursive;
    font-size: 3em;
  }
    .img {
    position: absolute;
  }
}
@media screen and (max-width: 415px) {
  .sunTarget {
    margin-left: 20px;
    margin-top: 50px;
    position: absolute;
  }
  .sunTarget p {
    font-family: "Kirang Haerang", cursive;
    font-size: 1.2em;
    font-weight: 300;
  }

  .img {
    position: absolute;
  }
  .personTarget {
    height: 15%;
    width: 15%;
    margin-left: 35%;
    margin-top: 25%;
    position: absolute;
  }
  .personTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
        font-size: 1.2em;
  }
  .cloudTarget {
    height: 15%;
    width: 15%;
    margin-left: 75%;
    margin-top: 30%;
    position: absolute;
  }
  .cloudTarget p {
    font-family: "Kirang Haerang", cursive;
    font-weight: 300;
        font-size: 1.2em;
  }
}
</style>
