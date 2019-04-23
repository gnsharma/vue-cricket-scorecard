<template>
  <div class="celebration" v-if="show">
    <p class="text-left m-3"> Celebration </p>

    Yay!!! You just hit a six. Smashed it!!!
  </div>
</template>

<script>
export default {
  name: "Celebration",
  data() {
    return {
      show: false
    };
  },
  methods: {
    showDiv() {
      this.show = true;
    },
    hideDiv() {
      this.show = false;
    }
  }

};
</script>