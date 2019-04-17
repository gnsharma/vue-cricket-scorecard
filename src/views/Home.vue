<template>
  <div class="home">
    <p class="text-left m-3"> Home </p>
    <ScoreCard />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import ScoreCard from "@/components/ScoreCard.vue";

export default {
  name: "home",
  components: {
    ScoreCard
  },
};
</script>

