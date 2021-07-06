<template>
    <div>
        <ul  id="header" >
        <li class="header-elements">Quizy</li>
        <li class="header-elements">Entdecken</li>
        <li class="header-elements">Freunde</li>
        <li class="header-elements">Suche</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style>
#header {
  margin: 0;
  text-align: center;
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: x-large;
}

.header-elements {
  margin: 0%;
  height: 100%;
  padding: 5px 5px 5px 5px;
}

ul, li {
  list-style: none;
}
</style>
