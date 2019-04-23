<template>
    <div class="bowler">
      <p class="text-left m-3"> Bowler </p>
      This over:
      <span v-for="(item, index) in thisOver" v-bind:key="index">
        {{ item }}
      </span>
    </div>
</template>

<script>
export default {
    name: "Bowler",
    inject: ['thisOver']
}
</script>

