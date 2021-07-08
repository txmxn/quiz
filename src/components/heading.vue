<template>
    <div>
        <ul id="header" >
          <li class="header-elements" v-if="state == states.WELCOME" @click="$emit('started')">START</li>
          <li class="header-elements" v-else @click="$emit('aborted')">ZURÜCK</li>
          <li class="header-elements logo"><img src="@/assets/icon.svg" width="35px"></li>
          <li class="header-elements" @click="$emit('help')">HILFE</li>
        </ul>
    </div>
</template>

<script>
import { State } from "@/utils.js";

export default {
  name: 'heading',
  props: ['state'],
  data() {
    return {
      states: State,
    }
  },
}
</script>

<style>
#header {
  margin: 0;
  padding: 10px;
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
  padding: 10px;
  border-style: solid;
  cursor: pointer;
}

.header-elements.logo {
  margin: 0%;
  height: 100%;
  border-style: none;
  cursor: initial;
}

ul, li {
  list-style: none;
}
</style>
