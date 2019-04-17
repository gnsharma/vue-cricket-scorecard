<template>
  <div class="hello">
    <div>
      {{ firstTeam }}: {{ score }}/{{ wickets }}
      {{ secondTeam }}
    </div>
    <div>
      {{ firstTeam }} Innings
    </div>
    <ul>
      <li v-for="i in 11" v-bind:key="i">
        <router-link v-bind:to="'/player/batter ' + i">Batter {{ i }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScoreCard",
  props: {
    firstTeam: String,
    secondTeam: String,
    score: Number,
    wickets: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
