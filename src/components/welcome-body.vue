<template>
    <div id="welcome-body">
      <h1>{{ welcomeMessage }}</h1>
      <img src="@/assets/timons-quiz.svg" width="500">
  </div>
</template>

<script>
export default {
  name: 'welcome-body',
  data() {
    return {
      welcomeMessage: "Willkommen beim Quiz!",
    }
  },
  created() {
    fetch("http://localhost:8081/")
    .then(response => response.json())
    .then(json => {
      this.welcomeMessage = json.message;
    });
  }
} 
</script>

<style>
#welcome-body {
    font-size: 60px;
    text-align: center;
}
</style>