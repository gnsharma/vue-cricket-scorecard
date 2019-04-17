<template>
  <div class="home">
    <ScoreCard
      v-bind="inningsData"
      v-on:add-score="addScore($event)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import ScoreCard from "@/components/ScoreCard.vue";

const inningsData = {
  firstTeam: "Delhi Capitals",
  secondTeam: "Chennai Super Kings",
  score: 0,
  wickets: 0,
  thisOver: ['.', '.', '.', '.', '.', '.']
};

export default {
  name: "home",
  components: {
    ScoreCard
  },
  data() {
    return {
      inningsData
    };
  },
  methods: {
    addScore(score) {
      // eslint:disable-next-line:no-debugger
      debugger;
      this.inningsData.score += parseInt(score);
      Vue.set(
        this.inningsData.thisOver,
        this.inningsData.thisOver.indexOf('.'),
        parseInt(score)
      );
    },
  }
};
</script>
