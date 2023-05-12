<template>
  <div>
    <h3>直接用:</h3>
    <input type="text" v-model="msg" />

    <h3>原理:</h3>
    <input type="text" :value="info" @input="fn" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "初始化数据",
      info: "初始化数据",
    };
  },
  methods: {
    fn(e) {
      this.info = e.target.value;
    },
  },
};
</script>

<style>
</style>