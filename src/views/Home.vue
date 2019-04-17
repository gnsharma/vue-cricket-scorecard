<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ScoreCard from "@/components/ScoreCard.vue";

export default {
  name: "home",
  components: {
    ScoreCard
  }
};
</script>
