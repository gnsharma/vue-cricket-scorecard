<template>
<<<<<<< HEAD
    <div class="Bowler">
        <p class="text-left m-3"> Bowler </p>
=======
    <div class="bowler">
>>>>>>> rebase and fix issues
        This over:
        <span v-for="(item, index) in thisOver" v-bind:key="index">
            {{ item }}
        </span>
    </div>
</template>

<script>
export default {
    name: "Bowler",
    props: {
        thisOver: Array
    }
}
</script>

