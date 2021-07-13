<template>
    <div id="welcome-body">
      <h1>{{ welcomeMessage }}</h1>
      <img src="@/assets/timons-quiz.svg" width="500">
      <div class="highscore">Der aktuelle Highscore lautet {{ highscore }}.</div>     
  </div>
</template>

<script>
export default {
  name: 'welcome-body',
  props: ["highscore", "welcomeMessage"],
} 
</script>

<style>
#welcome-body {
    font-size: 60px;
    text-align: center;
}
</style>
