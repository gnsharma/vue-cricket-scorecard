<template>
  <div class="home">
    <p class="text-left m-3"> Home </p>

    <ScoreCard
      v-bind="inningsData"
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
  created: function() {
    this.$root.$on('add-score', ($event) => {
      this.addScore($event);
    });
  },
  methods: {
    addScore(score) {
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

