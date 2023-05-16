<template>
  <div>
    <p id="box">我是测试数据</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "测试数据",
    };
  },
  beforeMount() {
    console.log("beforeMount ", document.querySelector("#box"));
    console.log("beforeMount ", this.msg);
  },
  mounted() {
    console.log("mounted ", document.querySelector("#box"));
    console.log("mounted ", this.msg);
  },
};
</script>

<style>
</style>