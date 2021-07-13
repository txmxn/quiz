<template>
  <div id="app">
    <Heading @started="started()" @aborted="abort()" @help="state = states.HELP" :state="state"/>
    <WelcomeBody v-if="state == states.WELCOME" :highscore="highscore" :welcomeMessage="welcomeMessage" />
    <Help v-if="state == states.HELP"/>
    <Question :element="database[current]" :questionNumber="alreadyAsked.length" :allQuestions="database.length" @correct="correctAnswer" v-if="alreadyAsked.length < database.length && state == states.STARTED"/>
    <Finish :score="score" :highscore="highscore" :allQuestions="database.length" v-if="alreadyAsked.length == database.length && state == states.STARTED"/>
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
      highscore: 0,
      welcomeMessage: "Welcome",
    }
  },
  created() {
    this.abort();
  },
  methods: {
    correctAnswer({ score, highscore }) {
      this.score = score;
      this.highscore = highscore;
      this.alreadyAsked.push(this.current);      
      if (this.alreadyAsked.length < this.database.length) {
        this.current += 1;
      }    
    },
    started() {
      fetch("http://localhost:8081/quiz", { method: "get", credentials: 'include' })
      .then(response => response.json())
      .then(json => {
        this.database = json.daten;
      });
      this.state = State.STARTED;
      this.alreadyAsked = [];
      this.current = 0;
      this.score = 0;
    },
    abort() {
      this.state = this.states.WELCOME
      fetch("http://localhost:8081/",  { method: "get", credentials: 'include', headers:{'content-type': 'application/json'}})
      .then(response => response.json())
      .then(json => {
        this.welcomeMessage = json.message;
        this.highscore = json.highscore;
      });
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
