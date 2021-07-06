<template>
    <div id="body-part">
      <div id="question">{{ randomizedData.question }}</div>
    
      <div class="answers">
        <div class="answer" v-for="(answer, index) in randomizedData.answers" :key="index" @click="checkAnswer(index)">{{ labels[index] }} {{ answer }}</div>
      </div>

      <div class="result">{{ check }}</div>
    </div>
</template>

<script>
function shuffle(database) {
    for (let i = database.answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [database.answers[i], database.answers[j]] = [database.answers[j], database.answers[i]];
        if (database.right == j) {
          database.right = i;
        }
    }
    return database;
}

export default {
  name: 'body',
  props: ["database"],
  data() {
    return {
      labels: ["A:", "B:", "C:", "D:",],
      check: "Bitte Antwort wählen",
    }
  },
  computed: {
    randomizedData() {
      const result = shuffle(this.database);
      return result;
    },
  },
  methods: {
    checkAnswer(index) {
      if (index == this.randomizedData.right) {
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