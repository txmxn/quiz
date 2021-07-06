<template>
    <div id="body-part">
      <div id="question">{{ database.question }}</div>
    
      <div class="answers">
        <div class="answer" v-for="(answer, index) in database.answers" :key="index" @click="checkAnswer(index)">{{ labels[index] }} {{ answer }}</div>
      </div>

      <div class="result">{{ check }}</div>
    </div>
</template>

<script>
export default {
  name: 'body',
  props: ["database"],
  data() {
    return {
      labels: ["A:", "B:", "C:", "D:", "E:", "F:"],
      check: "Bitte Antwort wählen",
    }
  },
  methods: {
    checkAnswer(index) {
      if (index == this.database.right) {
        this.check = "Right answer";
      }
      else {
        this.check = "Wrong answer";
      }
    }
  }
}
</script>

<style>
#body-part {
  margin: 20px auto 20px auto;
  width: 800px;
  background-color: blueviolet;
}

#question {
  background-color: honeydew;
  margin: 10px auto 10px auto;
  text-align: center;
  border-style: solid;
}
.answers {
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
}

.answer {
  width: 100%;
  background-color: honeydew;
  text-align: left;
}

.answers > div {
  flex: 50%;
  margin-bottom: 10px;
}
</style>