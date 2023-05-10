<template>
  <div>
    <h4>$refs 获取组件对象</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "我是子组件内部初始化数据",
    };
  },
  methods: {
    fn() {
      console.log("我是子组件内部初始化方法");
    },
  },
};
</script>

<style>
</style>