<template>
  <div class="hello">
    <button v-on:click="addScore('0')"> 0 </button>
    <button v-on:click="addScore('1')"> 1 </button>
    <button v-on:click="addScore('2')"> 2 </button>
    <button v-on:click="addScore('3')"> 3 </button>
    <button v-on:click="addScore('4')"> 4 </button>
    <button v-on:click="addScore('6')"> 6 </button>
    <!-- <button v-on:click="addWicket()"> W </button> -->
    <div>
      {{ firstTeam }}: {{ score }}/{{ wickets }}
      <!-- {{ secondTeam }} -->
    </div>
    <div>
      {{ firstTeam }} Innings
    </div>
    <ul>
      <li v-for="i in 2" v-bind:key="i">
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
  },
  methods: {
    addScore(score) {
      this.$emit('add-score', score);
    },
    // addWicket() {
    //   this.$emit('add-wicket');
    // },
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
