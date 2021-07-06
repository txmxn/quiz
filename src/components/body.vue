<template>
    <div id="body-part">
      <div id="question">Warum ist die Banane krum?</div>
    
      <div class="answers">
        <div class="answer">A. Darum</div>
        <div class="answer">B. Weilich sie verbogen habe</div>
        <div class="answer">C. Ich bin mir nicht sicher, aber ich will hier mal raten: Keine Ahnung.</div>
        <div class="answer">D. Antwort4</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'body',
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