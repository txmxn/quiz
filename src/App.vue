<template>
  <div id="app">
    <Heading @started="started()" @aborted="state = 'WELCOME'" @help="state = 'HELP'" :state="state"/>
    <WelcomeBody v-if="state == 'WELCOME'"/>
    <Help v-if="state == 'HELP'"/>
    <Question :element="database[current]" :questionNumber="alreadyAsked.length" :allQuestions="database.length" @correct="correctAnswer" v-if="alreadyAsked.length < database.length && state == 'STARTED'"/>
    <Finish :score="score" :allQuestions="database.length" v-if="alreadyAsked.length == database.length && state == 'STARTED'"/>
    <Score :score="score" v-if="state == 'STARTED'"/>
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
import database from "@/database.js"

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
      state: "WELCOME",
      database: database,
      current: 0,
      alreadyAsked: [],
      score: 0,
    }
  },
  created() {
 //   this.started();
  },
  methods: {
    correctAnswer(points) {
      this.score += points;
      this.alreadyAsked.push(this.current);      
      if (this.alreadyAsked.length < this.database.length) {
        this.current = Math.floor(Math.random() * this.database.length);
        while (this.alreadyAsked.includes(this.current)) {
          this.current = Math.floor(Math.random() * this.database.length);
        }
      }    
    },

    started() {
      this.state = 'STARTED';
      this.alreadyAsked = [];
      this.current = Math.floor(Math.random() * this.database.length);
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
