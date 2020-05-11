<template>
    <div>
        <v-row>
            <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4"> </v-col>
            <v-col>
                <p class="header" @click="legalOverlay = !legalOverlay">
                Frequently Asked Questions
                </p>
                <transition name="flip">
                    <v-overlay v-if="legalOverlay" color="white" opacity="1" :value="legalOverlay" :z-index="5">
                        <div style="color:black;" v-for="(faq, i) in faqs" v-bind:key="i">
                            <p>Q : {{ faq.question }}</p>
                            <p>A : {{ faq.answer }}</p>
                        </div>
                    <v-btn @click="legalOverlay = !legalOverlay">Done! </v-btn>
                    </v-overlay>
                </transition>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    name: 'FAQ',
    data(){
        return{
            legalOverlay: false,
            faqs: [
        {
          question: "Do you accept private insurance?",
          answer: "This is a cash paying office. We do not accept insurance."
        },
        {
          question: "Do you perform toxicology screens and Urinalysis?",
          answer: "Yes."
        },
        { question: "Another question", answer: "Another answer" },
        {
          question: "Is this the format of the frequently asked questions?",
          answer: "Yes, this is the format for presenting a Q and A"
        }
      ],
        }
    }
}
</script>
<style scoped>
.letter {
  width: 300px;
  height: 300px;
}
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
@media screen and (max-width: 415px) {
  .contactOverlay {
    width: 325px;
  }
}
@media screen and (min-width: 416px) {
  .contactOverlay {
    width: 600px;
    align-content: center;
  }
  h1 {
    font-size: 3em;
    margin-left: 10%;
    font-weight: 900;
  }
}
.flip-enter{
    transform: scaleY(0);
}
.flip-enter-to{
    transform: scaleY(1);
}
.flip-enter-active{
    transition: transform 400ms ease-in-out;
}
.flip-leave{
    transform: scaleY(1)
}
.flip-leave-to{
    transform:scaleY(0)
}
.flip-leave-active{
    transition: transform 200ms ease-in-out;
}
</style>