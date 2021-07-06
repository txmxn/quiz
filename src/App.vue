<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />

  </div> 
</template>

<script>
import Header from "@/components/header.vue"
import Body from "@/components/body.vue"
import Footer from "@/components/footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;  
}

#app {
  margin: 0%;
  padding: 0%;
  background-color: khaki;
  display: grid;
  grid-template-rows: 50px auto 50px;
}
</style>
