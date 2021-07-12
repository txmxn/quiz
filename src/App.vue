<template>
  <div id="app">
    <Heading @started="started()" @aborted="state = states.WELCOME" @help="state = states.HELP" :state="state"/>
    <WelcomeBody v-if="state == states.WELCOME"/>
    <Help v-if="state == states.HELP"/>
    <Question :element="database[current]" :questionNumber="alreadyAsked.length" :allQuestions="database.length" @correct="correctAnswer" v-if="alreadyAsked.length < database.length && state == states.STARTED"/>
    <Finish :score="score" :allQuestions="database.length" v-if="alreadyAsked.length == database.length && state == states.STARTED"/>
    <Score :score="score" v-if="alreadyAsked.length < database.length && state == states.STARTED"/>
    <FootBar />
  </div> 
</template>

<script>
import Heading from "@/components/heading.vue"
import Help from "@/components/help.vue"
import WelcomeBody from "@/components/welcome-body.vue"
import Question from "@/components/question.vue"
import Finish from "@/components/finish.vue"
import Score from "@/components/score.vue"
import FootBar from "@/components/footbar.vue"
import { State } from "@/utils.js";

export default {
  name: 'App',
  components: {
    Heading,
    Help,
    WelcomeBody,
    Question,
    Score,
    Finish,
    FootBar
  },
  data() {
    return {
      state: State.WELCOME,
      states: State, 
      database: [],
      current: 0,
      alreadyAsked: [],
      score: 0,
    }
  },
  created() {
    fetch("http://localhost:8081/quiz")
    .then(response => response.json())
    .then(json => {
      this.database = json.daten;
    });
  },
  methods: {
    correctAnswer(points) {
      this.score += points;
      this.alreadyAsked.push(this.current);      
      if (this.alreadyAsked.length < this.database.length) {
        this.current += 1;
      }    
    },
    started() {
      this.state = State.STARTED;
      this.alreadyAsked = [];
      this.current = 0;
      this.score = 0;
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: khaki;  
}

#app {
  margin: 0%;
  display: grid;
  grid-template-rows: 50px auto 50px;
}
</style>
