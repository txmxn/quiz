<template>
    <div>
        <ul id="header" >
          <li class="header-elements" v-if="state == 'WELCOME'" @click="$emit('started')">START</li>
          <li class="header-elements" v-else @click="$emit('aborted')">ABBRECHEN</li>
          <li class="header-elements">HILFE</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'heading',
  props: ['state'],
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
  cursor: pointer;
}

ul, li {
  list-style: none;
}
</style>
