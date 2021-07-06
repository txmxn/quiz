<template>
    <div>
        <ul id="welcome-header" >
          <li class="welcome-header-elements">START</li>
          <li class="welcome-header-elements">HILFE</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'welcome-headings',
}
</script>

<style>
#welcome-header {
  margin: 0;
  text-align: center;
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: x-large;
}

.welcome-header-elements {
  margin: 0%;
  height: 100%;
  padding: 5px 5px 5px 5px;
}

ul, li {
  list-style: none;
}
</style>
