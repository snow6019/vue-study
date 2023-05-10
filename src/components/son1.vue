<template>
  <div>
    <div class="box">
      <button @click="flag = !flag">{{ flag ? "折叠" : "展开" }}</button>
      <ul v-show="flag">
        <li>xxccxcxcxccccccc</li>
        <li>xxccxcxcxccccccc</li>
        <li>xxccxcxcxccccccc</li>
        <li>xxccxcxcxccccccc</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
.box {
  width: 200px;
  border: 1px solid #000;
  margin: 3px;
}
</style>