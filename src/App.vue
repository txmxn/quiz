<template>
  <div id="app">
    <Heading @started="state = 'STARTED'" @aborted="state = 'WELCOME', score = 0" :state="state"/>
    <WelcomeBody v-if="state == 'WELCOME'"/>
    <Question :element="database[current]" :questionNumber="alreadyAsked.length" :allQuestions="database.length" @correct="correctAnswer" v-if="alreadyAsked.length < database.length && state == 'STARTED'"/>
    <Finish v-if="alreadyAsked.length == database.length && state == 'STARTED'"/>
    <Score :score="score"/>
    <FootBar />
  </div> 
</template>

<script>
import Heading from "@/components/heading.vue"
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
    this.current = Math.floor(Math.random() * this.database.length);
    this.alreadyAsked.push(this.current);
  },
  methods: {
    correctAnswer(points) {
      this.score += points;
      if (this.alreadyAsked.length < this.database.length) {
        this.current = Math.floor(Math.random() * this.database.length);
        while (this.alreadyAsked.includes(this.current)) {
          this.current = Math.floor(Math.random() * this.database.length);
        }
      this.alreadyAsked.push(this.current);     
      }
      else {
        this.alreadyAsked = []; 
      }
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;  
}

#app {
  margin: 0%;
  padding: 0%;
  background-color: khaki;
  display: grid;
  grid-template-rows: 50px auto 50px;
}
</style>
