<template>
  <div class="home">
    <p class="text-left m-3"> Home </p>

    <ScoreCard
      v-bind="inningsData"
      v-on:add-score="addScore($event)"
    />

    <Celebration ref="celebration-ref" />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import ScoreCard from "@/components/ScoreCard.vue";
import Celebration from "@/components/Celebration.vue";

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
    Celebration,
    ScoreCard
  },
  data() {
    return {
      inningsData
    };
  },
  methods: {
    addScore(score) {
      if (parseInt(score) === 6) this.$refs["celebration-ref"].showDiv();
      else this.$refs["celebration-ref"].hideDiv();

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

