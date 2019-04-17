<template>
  <div class="home">
    <ScoreCard
      v-bind="inningsData"
      v-on:add-score="addScore($event)"
      v-on:add-wicket="addWicket()"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreCard from "@/components/ScoreCard.vue";

const inningsData = {
  firstTeam: "Delhi Capitals",
  secondTeam: "Chennai Super Kings",
  score: 0,
  wickets: 0
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
      this.inningsData.score += parseInt(score);
    },
    addWicket() {
      this.inningsData.wickets += 1;
    }
  }
};
</script>
