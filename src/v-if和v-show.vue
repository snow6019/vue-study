<template>
  <div>
    <h3>v-show 和 v-if</h3>
    <button @click="key = !key">{{key?"折叠":"展示"}}</button>
    <div v-show="key" class="box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: true
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