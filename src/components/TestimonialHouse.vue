<template>
    <div>
        <v-row>
            <v-col v-if="$vuetify.breakpoint.smAndUp" sm="6" md="4" />
            <v-col>
                <p class="header" @click="testimonialOverlay = !testimonialOverlay"> What are people saying</p>
                <transition name="flip">
                    <v-overlay color="black"
                    v-if="testimonialOverlay"
                    opacity=".3"
                    :value="testimonialOverlay">
                        <div class="quoteHolder">
                            <transition name="bounce">
                                <div v-if="show" id="target" class="speech-bubble">
                                    <p> {{quote}}</p>
                                </div>
                            </transition>
                        </div>
                        <img @click="showQuote" src="@/assets/talk.png">
                        <v-btn text @click="testimonialOverlay = false">Done!</v-btn>
                    </v-overlay>
                </transition>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    components: {

    },
    data(){
        return{
            statements: [
                "This was a positive experience",
                "Not worth filing a lawsuit over.",
                "Yet another positive experience"
            ],
            classList: ['one', 'two', 'three', 'four', 'five'],
            show: false,
            testimonialNumber: Math.floor(Math.random() * Math.floor(4)),
            quote: '',
            testimonialOverlay: false,
            
        }
    },
    methods: {
        showQuote: function(){
            this.testimonialNumber = Math.floor(Math.random() * Math.floor(4));
            this.quote = this.statements[this.testimonialNumber];
            this.show = !this.show
        }
    },
    beforeMount(){
        this.quote = this.statements[this.testimonialNumber]
    }
}
</script>
<style scoped>
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
.quoteHolder{
    height: 200px;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.header {
  font-family: "Kirang Haerang", cursive;
  font-size: 2em;
}
.speech-bubble {
	position: relative;
	background: #ffffff;
	border-radius: .4em;
    padding: 15px;
    max-width: 300px;
    font-weight: bold;
    font-size: 1.4em;
    color: black;
    text-align: center;
    font-family: 'Sunflower';
}

.speech-bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 48px solid transparent;
	border-top-color: #ffffff;
	border-bottom: 0;
	border-left: 0;
	margin-left: -24px;
	margin-bottom: -48px;
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
</style>