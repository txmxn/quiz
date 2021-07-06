<template>
    <div id="body-part">
      <div id="question">{{ randomizedData.question }}</div>
    
      <div class="answers">
        <div class="answer" :class="{'wrong': checked.includes(index)}" v-for="(answer, index) in randomizedData.answers" :key="index" @click="checkAnswer(index)">{{ labels[index] }} {{ answer }}</div>
      </div>

      <div class="result">{{ check }}. Aktuelle erreichbare Punkte: {{ point }}</div>

    </div>
</template>

<script>
function shuffle(database) {
    for (let i = database.answers.length -1 ; i > 0; i--) {
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
      point: 3,
      checked: [],
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
      this.checked.push(index);
      console.log(this.database.answers.length)
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
.answers > div.wrong {
  background-color: red;
}

</style>