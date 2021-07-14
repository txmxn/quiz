<template>
    <div id="welcome-body">
      <h1>{{ welcomeMessage }}</h1>
      <img src="@/assets/quiz.svg" width="500">
      <div class="highscore">Der aktuelle Highscore von <strong>{{ highScoreUser }}</strong> lautet {{ highScore }}.</div>     
  </div>
</template>

<script>
export default {
  name: 'welcome-body',
  props: ["highScore", "highScoreUser", "welcomeMessage"],
} 
</script>

<style>
#welcome-body {
    font-size: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    padding: 25px;
}
#welcome-body h1 {
  margin: 0px;
}
</style>
