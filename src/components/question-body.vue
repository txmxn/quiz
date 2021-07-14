<template>
    <div id="question-body">
      <div class="question">{{ element.question }}</div>
    
      <div class="answers">
        <div class="answer" :class="{'wrong': checked.includes(index)}" v-for="(answer, index) in element.answers" :key="index" @click="checkAnswer(index)">{{ labels[index] }} {{ answer }}</div>
      </div>

      <div class="result">{{ check }}. Erreichbare Punkte: {{ point }}</div>
      <div class="questionCounter">Frage {{ questionNumber + 1 }}/{{ allQuestions }}</div>

      <div class="score">Score:  {{ score }}</div>
    </div>
</template>

<script>
export default {
  name: 'question-body',
  props: ["element", "questionNumber", "allQuestions", "username", "score"],
  data() {
    return {
      labels: ["A:", "B:", "C:", "D:",],
      check: "Bitte Antwort wählen",
      point: 3,
      checked: [],
      right: null
    }
  },
  methods: {
    checkAnswer(index) {
      fetch("http://localhost:8081/solve", { method: "post", credentials: 'include', headers:{'content-type': 'application/json'}, body: JSON.stringify({
        question: this.element.question,
        answer: this.element.answers[index],
        username: this.username,
      })})
      .then(response => response.json())
      .then(json => {
      if (json.correct) {
        this.check = "Bitte Antwort wählen";
        this.$emit("correct", { score: json.currentScore, highScore: json.highScore, highScoreUser: json.highScoreUser });
        this.point = json.questionPoints;
        this.checked = [];
      }
      else {
        this.check = "Falsche Antwort";
        this.point = json.questionPoints;
        this.checked.push(index);
      }
      });

    }
  }
}
</script>

<style>
#question-body {
  margin: 100px auto 20px auto;
  width: 800px;
  padding-bottom: 25px;
  background-color: blueviolet;
}

.question {
  background-color: honeydew;
  margin: 10px auto 10px auto;
  text-align: center;
  border-style: solid;
  padding: 20px;
  margin: 20px;
  font-size: xx-large;
}
.answers {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 40px;
}

.answer {
  font-size: x-large;
  width: 50px;
  border-style: solid;
  background-color: honeydew;
  text-align: left;
  padding: 2px;
}

.answers > div {
  flex: 47% 0 1;
  margin-bottom: 10px;
}
.answers > div.wrong {
  background-color: red;
  cursor: default;
}

.result, .questionCounter {
  padding-left: 40px;
  font-size: x-large;
}

.score {
    text-align: center;
    font-size: x-large;
}
</style>