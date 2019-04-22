<template>
    <div class="bowler">
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

