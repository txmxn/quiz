<template>
  <div id="app">
    <Heading :state="state" @started="started()" @aborted="abort()" @help="help()" @changeuser="changeuser($event)"/>
    <WelcomeBody v-if="isWelcomeState" :highScore="highScore" :highScoreUser="highScoreUser" :welcomeMessage="welcomeMessage" />
    <QuestionBody v-if="isStartedState && hasMoreQuestions" :score="score" :element="quiz[current]" :questionNumber="alreadyAsked.length" :allQuestions="quiz.length" :username="username" @correct="correctAnswer($event)"/>
    <FinishBody   v-if="isStartedState && !hasMoreQuestions" :score="score" :highScore="highScore" :allQuestions="quiz.length" :highScoreUser="highScoreUser"/>
    <HelpBody v-if="isHelpState"/>
    <FootBar />
  </div> 
</template>

<script>
import Heading from "@/components/heading.vue"
import WelcomeBody from "@/components/welcome-body.vue"
import QuestionBody from "@/components/question-body.vue"
import FinishBody from "@/components/finish-body.vue"
import HelpBody from "@/components/help-body.vue"
import FootBar from "@/components/footbar.vue"
import { State } from "@/utils.js";

export default {
  name: 'App',
  components: {
    Heading,
    HelpBody,
    WelcomeBody,
    QuestionBody,
    FinishBody,
    FootBar
  },
  data() {
    return {
      state: State.WELCOME,
      states: State, 
      quiz: [],
      current: 0,
      alreadyAsked: [],
      score: 0,
      highScore: 0,
      highScoreUser: "unknown",
      welcomeMessage: "Welcome",
      username: "unknown",
    }
  },
  created() {
   this.abort();
  },
  computed: {
    isWelcomeState() {
      return this.state == this.states.WELCOME;
    },
    isStartedState() {
      return this.state == this.states.STARTED;
    },
    hasMoreQuestions() {
      return this.alreadyAsked.length < this.quiz.length;
    },
    isHelpState() {
      return this.state == this.states.HELP;
    }
  },
  methods: {
    changeuser(user) {
      this.username = user;
    },
    correctAnswer({ score, highScore, highScoreUser }) {
      this.score = score;
      this.highScore = highScore;
      this.highScoreUser = highScoreUser;
      this.alreadyAsked.push(this.current);      
      if (this.alreadyAsked.length < this.quiz.length) {
        this.current += 1;
      }    
    },
    started() {
      fetch("http://localhost:8081/quiz", { method: "get", credentials: 'include' })
      .then(response => response.json())
      .then(json => {
        this.quiz = json.questions;
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
        this.highScore = json.highScore;
      });
    },
    help() {
      this.state = this.states.HELP;
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
  grid-template-rows: 74px auto 50px;
}
</style>
