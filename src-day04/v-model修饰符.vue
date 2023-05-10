<template>
  <div>
    <h3>v-model修饰符</h3>
    <input type="text" v-model.trim="msg">
    <input type="text" v-model.number="num">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "看到弗利萨",
      num: "12"
    }
  }
}
</script>

<style>
.box{
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
</style>