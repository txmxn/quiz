<template>
    <div class="finish">
      <p>Das Quiz ist zu Ende...</p>
      <div class="auswertung">{{ score }} von {{ allQuestions * 3 }} Punkten erreicht.</div>
      <div class="highscore">Der aktuelle Highscore von <strong>{{ highscoreuser }}</strong> lautet {{ highscore }}.</div>     
    </div>
</template>

<script>
export default {
  name: 'finish',
  props: ['score', 'highscore', 'highscoreuser', 'allQuestions']
}
</script>

<style>
.finish {
  margin-top: 15%;
  text-align: center;
  font-size: 60px;
}
</style>
