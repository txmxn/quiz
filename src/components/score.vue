<template>
    <div class="score">Score:  {{ score }}</div>
</template>

<script>
export default {
  name: 'score',
  props: ["score"],
}
</script>

<style>
.score {
    text-align: center;
    font-size: x-large;
}
</style>