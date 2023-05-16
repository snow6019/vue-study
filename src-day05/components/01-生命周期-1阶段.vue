<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      msg: "测试数据",
    };
  },
  beforeCreate() {
    console.log("beforeCreate ", this.msg);
  },
  created() {
    console.log("created ", this.msg);
  },
};
</script>

<style>
</style>