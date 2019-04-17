<template>
  <div class="home">
    <ScoreCard v-bind="propsObject" />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreCard from "@/components/ScoreCard.vue";

const propsObject = {
    firstTeam: 'Delhi Capitals',
    secondTeam: 'Chennai Super Kings',
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
      propsObject
    }
  }
};
</script>
