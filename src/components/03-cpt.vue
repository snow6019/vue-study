<template>
  <div>
    <p>库存: {{ value }}</p>
    <button @click="sale">sale</button>
  </div>
</template>

<script>
export default {
  props:["value"],
  methods: {
    sale() {
      this.$emit("input", -7);
    },
  },
};
</script>

<style>
</style>