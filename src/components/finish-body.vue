<template>
    <div id="finish-body">
      <p>Das Quiz ist zu Ende...</p>
      <div class="auswertung"><strong>{{ score }}</strong> von <strong>{{ allQuestions * 3 }}</strong> Punkten erreicht.</div>
      <div class="highscore">Der aktuelle Highscore von <strong>{{ highScoreUser }}</strong> lautet <strong>{{ highScore }}</strong>.</div>     
    </div>
</template>

<script>
export default {
  name: 'finish-body',
  props: ['score', 'highScore', 'highScoreUser', 'allQuestions']
}
</script>

<style>
#finish-body {
  margin-top: 15%;
  text-align: center;
  font-size: 60px;
}
</style>
