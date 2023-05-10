<template>
  <div>
    <h3>v-model</h3>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "看到弗利萨"
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