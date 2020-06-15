<template>
  <div class="goals">
    <v-row cols="16">
      <v-col md="1" />
      <v-col md="8">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 370 598"
        >
          <polygon
            fill="#8A0086"
            stroke="#ffffff"
            class="flag"
            points="0 597.5  65 80    130 597.5   195 300   260 597.5   325 100   370 597.5"
          >
            <animate
              fill="freeze"
              attributeName="points"
              dur="2000ms"
              to="0 597.5  65 200  130 597.5   195 250   260 597.7   325 400   370 597.5"
            />
            <animate
              id="begin"
              begin="indefinite"
              fill="freeze"
              attributeName="points"
              dur="1000ms"
              to="0 597.5  65 300  130 597.5   195 100   260 597.5   325 90     370 597.5"
            />
            <animate
              id="step2"
              begin="indefinite"
              fill="freeze"
              attributeName="points"
              dur="1000ms"
              to="0 597.5  20 575  40 597.5    100 200   300 597.5   335 500   370 597.5"
            />
            <animate
              id="step3"
              begin="indefinite"
              fill="freeze"
              attributeName="points"
              dur="1000ms"
              to="0 597.5  40 505  80 597.5    175 480   260 597.5   335 525   370 597.5"
            />
          </polygon>
          <p>
            currentGoal :
            <span data-aos="fade-up">{{ currentGoal }}</span>
          </p>
          <rect
            class="flag"
            v-if="step2"
            fill="#e6e6e6"
            x="191"
            y="40"
            width="7"
            height="64"
          />
          <rect
            class="flag"
            v-if="step2"
            fill="#ff2329"
            x="197"
            y="40"
            width="37"
            height="28"
          />
          <rect
            class="flag"
            v-if="step2"
            fill="#DB0041"
            x="197"
            y="40"
            width="20"
            height="28"
          />
          <circle
            class="flag"
            v-if="step2"
            fill="#FFE023"
            stroke="#ffffff"
            cx="195"
            cy="33"
            r="7.5"
          />

          <rect
            v-if="step3"
            fill="#e6e6e6"
            x="191"
            y="191"
            width="7"
            height="64"
          />
          <rect
            v-if="step3"
            fill="#ff2329"
            x="197"
            y="191"
            width="37"
            height="28"
          />
          <rect
            v-if="step3"
            fill="#DB0041"
            x="197"
            y="191"
            width="20"
            height="28"
          />
          <circle
            v-if="step3"
            ill="#FFE023"
            stroke="#ffffff"
            cx="195"
            cy="184"
            r="7.5"
          />

          <rect
            v-if="step4"
            fill="#e6e6e6"
            x="96"
            y="140"
            width="7"
            height="64"
          />
          <rect
            v-if="step4"
            fill="#ff2329"
            x="102"
            y="140"
            width="37"
            height="28"
          />
          <rect
            v-if="step4"
            fill="#DB0041"
            x="102"
            y="140"
            width="20"
            height="28"
          />
          <circle
            v-if="step4"
            fill="#FFE023"
            stroke="#ffffff"
            cx="100"
            cy="133"
            r="7.5"
          />

          <rect
            v-if="step5"
            fill="#e6e6e6"
            x="171"
            y="420"
            width="7"
            height="64"
          />
          <rect
            v-if="step5"
            fill="#ff2329"
            x="178"
            y="420"
            width="37"
            height="28"
          />
          <rect
            v-if="step5"
            fill="#DB0041"
            x="178"
            y="420"
            width="20"
            height="28"
          />
          <circle
            v-if="step5"
            fill="#FFE023"
            stroke="#ffffff"
            cx="175"
            cy="413"
            r="7.5"
          />
        </svg>

        <v-chip
          class="ma-2"
          color="rgba(202, 194, 72, 0.2)"
          text-color="white"
          padding="20"
          style="border: solid 2px white;"
          width="40"
          v-for="(goal, i) in goals"
          v-bind:key="i"
        >
          <v-avatar left>
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-avatar>
          {{ goal }}
        </v-chip>

        <div class="goalParagraph">
          <transition name="slide">
            <p v-if="step1">{{ p1 }}</p>
          </transition>
          <transition name="slide">
            <p v-if="step2">{{ p2 }}</p>
          </transition>
          <transition name="slide">
            <p v-if="step4">{{ p3 }}</p>
          </transition>
          <transition name="slide">
            <div v-if="step5">
              <p>{{ p5 }}</p>
              <p>Ready to start?</p>
              <v-btn @click="contact"> Let's talk!</v-btn>
            </div>
          </transition>
        </div>
        <transition name="exit">
          <v-form v-if="!step5" class="goalForm" v-on:submit.prevent>
            <v-text-field label="What do you want to do?" v-model="goal" />
            <v-btn text class="flag" @click="anim">I can do this!</v-btn>
          </v-form>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      currentGoal: "",
      goal: "",
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      p1:
        "Setting goals on your wellness journey will be helpful, but your journey will also change your goal.",
      p2:
        "Today's most urgent challenges and hurdles might seem trivial compared to what comes tomorrow.  What is seemingly impossible today could become as easy as riding a bicycle in time.",
      p3:
        "At House of Clay, we believe in both supporting you on wherever you want to go, but also helping you adjust your goals as you progress.",
      p4:
        "Whether you are struggling to maintain sobriety for the day or looking to get past residual pain from trauma, we understand your journey and your growth never truly end.",
      p5: "We will empower you to reach beyond dealing with today's problems.",
      goals: []
    };
  },
  methods: {
    contact: function() {
      this.$router.push({ path: "/contact" });
    },
    anim: function() {
      this.currentGoal = this.goal;
      this.goal = "";
      this.$store.commit({
        type: "addGoal",
        goal: this.currentGoal
      });
      this.goals.push(this.currentGoal);
      if (this.step1 == true) {
        var el = document.getElementById("begin");
        el.beginElement();
        this.step1 = false;
        this.step5 = false;
        this.step3 = false;
        this.step4 = false;
        this.step2 = true;
      } else if (this.step2 == true) {
        var em = document.getElementById("step2");
        em.beginElement();
        this.step2 = false;
        this.step3 = false;
        this.step5 = false;
        this.step4 = true;
      } else if (this.step4 == true) {
        var en = document.getElementById("step3");
        en.beginElement();
        this.step4 = false;
        this.step3 = false;
        this.step2 = false;
        this.step5 = true;
      }
    }
  }
};
</script>
<style scoped>
.header {
  font-size: 1.5em;
}
.flag {
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
@media screen and (min-width: 416px) {
  .goals {
  }
  .goals svg {
    height: 60vh;
    width: 1000px;
    border-bottom: 2px solid white;
    background-color: rgba(202, 194, 72, 0.2);
    border-radius: 500px;
  }
  .blank {
    opacity: 0;
  }
  .goalParagraph {
    border: solid 2px white;
    background-color: rgba(255, 225, 255, 0.8);
    font-size: 1.4em;
    padding: 20px;
    border-radius: 15px;
    width: 800px;
    text-align: center;
    margin: 12px;
    margin-left: 100px;
  }
  .goalForm {
    border: solid 2px white;
    background-color: rgba(255, 225, 255, 0.8);
    font-size: 1.4em;
    padding: 20px;
    margin: 12px;
    border-radius: 15px;
    width: 800px;
    margin-left: 100px;
  }
}

.slide-enter {
  transform: scaleY(0);
}
.slide-enter-to {
  transform: scaleY(1);
}
.slide-enter-active {
  transition: transform 800ms;
}
.exit-leave {
  transform: scaleY(1.2);
}
.exit-leave-to {
  transform: scaleY(0);
}
.exit-leave-active {
  transition: transform 800ms;
}
@media screen and (max-width: 415px) {
  .goals {
  }
  .goals svg {
    height: 30vh;
    width: 95vw;
    border-bottom: 2px solid white;
    background-color: rgba(202, 194, 72, 0.2);
    border-radius: 30%;
  }
  .blank {
    opacity: 0;
  }
  .goalParagraph {
    border: solid 2px white;
    background-color: rgba(255, 225, 255, 0.8);
    font-size: 1em;
    padding: 10px;
    border-radius: 15px;
    width: 90vw;
    text-align: center;
    margin: 10px;
  }
  .goalForm {
    border: solid 2px white;
    background-color: rgba(255, 225, 255, 0.8);
    font-size: 1em;
    padding: 10px;
    margin: 5px;
    border-radius: 15px;
    width: 90vw;
  }
}
</style>
