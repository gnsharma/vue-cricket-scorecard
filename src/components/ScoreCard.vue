<template>
  <div class="hello">
    <button
      v-for="i in 7"
      v-bind:key="i-1"
      v-on:click="addScore(i-1)">
    {{i-1}}
    </button>
    <div>
      {{ firstTeam }}: {{ score }}/{{ wickets }}
    </div>
    <div>
      {{ firstTeam }} Innings
    </div>
    <ul>
      <li v-for="i in 2" v-bind:key="i">
        <router-link v-bind:to="'/player/' + batters[i-1]"> {{ batters[i-1] }}</router-link>
         {{getBatterScore(i)}}
      </li>
    </ul>
    <div>
      This over:
      <span v-for="(item, index) in thisOver" v-bind:key="index">
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreCard",
  props: {
    firstTeam: String,
    secondTeam: String,
    score: Number,
    wickets: Number,
    thisOver: Array
  },
  data: function() {
    return {
      batters: ['Rishabh Pant', 'Shikhar Dhawan'],
      countBallBowled: 0,
    }
  },
  methods: {
    addScore(score) {
      this.countBallBowled += 1;
      if (this.countBallBowled > 6) {
        alert('Game over. Total score is '+ this.score);
      } else {
        this.$emit('add-score', score);
      }
    },
    getBatterScore(i){
      return (i%2) ? Math.floor(this.score/2) : Math.ceil(this.score/2);
    }
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
  color: #5548f5;
}
button{
  margin: 2px 2px 20px 2px;
}
</style>
