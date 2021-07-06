<template>
  <div id="app">
    <WelcomeHeading />
    <!--<Heading /> -->
    <WelcomeBody />
    <!--<Question :element="database[current]" :questionNumber="alreadyAsked.length" :allQuestions="database.length" @correct="correctAnswer" v-if="alreadyAsked.length < database.length"/>
    <Finish v-else /> -->
    <Score :score="score"/>
    <FootBar />
  </div> 
</template>

<script>
import WelcomeHeading from "@/components/welcome-heading.vue"
//import Heading from "@/components/heading.vue"
import WelcomeBody from "@/components/welcome-body.vue"
//import Question from "@/components/question.vue"
//import Finish from "@/components/finish.vue"
import Score from "@/components/score.vue"
import FootBar from "@/components/footbar.vue"
import database from "@/database.js"

export default {
  name: 'App',
  components: {
    WelcomeHeading,
    //Heading,
    WelcomeBody,
    //Question,
    Score,
    //Finish,
    FootBar
  },
  data() {
    return {
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
