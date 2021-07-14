<template>
    <div>
        <ul id="heading" >
          <li class="heading-elements" v-if="state == states.WELCOME" @click="$emit('started')">START</li>
          <li class="heading-elements" v-else @click="$emit('aborted')">ZURÜCK</li>
          <li class="heading-elements user" v-if="state == states.WELCOME">Benutzername: <input v-model="username" @blur="$emit('changeuser', username)"/></li>
          <li class="heading-elements logo" v-else><img src="@/assets/icon.svg" width="35px"></li>
          <li class="heading-elements" @click="$emit('help')">HILFE</li>
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
      username: "unknown",
    }
  },
}
</script>

<style>
#heading {
  margin: 0;
  padding: 10px;
  text-align: center;
  background-color: blueviolet;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: x-large;
}

.heading-elements {
  margin: 0%;
  height: 100%;
  padding: 10px;
  border-style: solid;
  cursor: pointer;
}
.heading-elements.user {
  border-style: none;
}
.heading-elements.logo {
  margin: 0%;
  padding: 0%;
  height: 100%;
  border-style: none;
  cursor: initial;
}

ul, li {
  list-style: none;
}
</style>
