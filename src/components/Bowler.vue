<template>
    <div class="bowler">
        <p class="text-left m-3"> Bowler </p>
        This over:
        <span>
            {{ overStats }}
        </span>
    </div>
</template>

<script>
export default {
  name: "Bowler",
  computed: {
    overStats() {
      return this.$store.getters.overStatsString;
    }
  }
}
</script>

