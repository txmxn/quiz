<template>
  <div id="app">
    <div id="header">
      <div class="header-elements">Quizy</div>
      <div class="header-elements">Entdecken</div>
      <div class="header-elements">Freunde</div>
      <div class="header-elements">Suche</div>
    </div>

    <div id="body-part">
      <div id="question">Warum ist die Banane krum?</div>
    
      <div class="answers">
        <div class="answer">Darum</div>
        <div class="answer">Weilich sie verbogen habe</div>
        <div class="answer">Ich bin mir nicht sicher, aber ich will hier mal raten: Keine Ahnung.</div>
        <div class="answer">Antwort4</div>
      </div>
      
    </div>

    <div id="footer">
      <p>Footer goes here</p>
    </div>
      
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
}

#app {
  margin: 0%;
  padding: 0%;
  background-color: khaki;
  display: grid;
  grid-template-rows: 50px auto 50px;

}

#header {
  text-align: center;
  background-color: aqua;
  margin-top: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.header-elements {
  margin: 0%;
  padding: 20px;
  background-color: blueviolet;
}

#body-part {
  margin: 20px auto 20px auto;
  width: 75%;
  background-color: brown;
}

#question {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.answers {
  display: flex;
  flex-wrap: wrap;
}

.answer {
  width: 100%;
  text-align: center;
}

.answers > div {
  flex: 50%;
  margin-bottom: 10px;
}

#footer {
  background-color: cadetblue;
  text-align: center;
}
</style>
