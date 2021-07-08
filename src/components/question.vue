<template>
    <div id="body-part">
      <div id="question">{{ randomizedData.question }}</div>
    
      <div class="answers">
        <div class="answer" :class="{'wrong': checked.includes(index)}" v-for="(answer, index) in randomizedData.answers" :key="index" @click="checkAnswer(index)">{{ labels[index] }} {{ answer }}</div>
      </div>

      <div class="result">{{ check }}. Erreichbare Punkte: {{ point }}</div>
      <div class="questionCounter">Frage {{ questionNumber + 1 }}/{{ allQuestions }}</div>

    </div>
</template>

<script>
import shuffle from "@/shuffle.js"

export default {
  name: 'question',
  props: ["element", "questionNumber", "allQuestions"],
  data() {
    return {
      labels: ["A:", "B:", "C:", "D:",],
      check: "Bitte Antwort wählen",
      point: 3,
      checked: [],
    }
  },
  computed: {
    randomizedData() {
      const result = shuffle(JSON.parse(JSON.stringify(this.element)));
      return result;
    },
  },
  methods: {
    checkAnswer(index) {
      this.checked.push(index);
      if (index == this.randomizedData.right) {
        this.check = "Bitte Antwort wählen";
        this.$emit("correct", this.point);
        this.point = 3;
        this.checked = [];
      }
      else {
        this.check = "Wrong answer";
        
        if (this.point > 0) {
          this.point -= 1;
        }
      }
    }
  }
}
</script>

<style>
#body-part {
  margin: 100px auto 20px auto;
  width: 800px;
  padding-bottom: 25px;
  background-color: blueviolet;
}

#question {
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
}

.result, .questionCounter {
  padding-left: 40px;
  font-size: x-large;
}

</style>