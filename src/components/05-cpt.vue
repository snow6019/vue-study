<template>
  <div>
    <p>
      <slot name="t" :row="obj">这是是标题</slot>
    </p>
    <hr />
    <p>
      <slot name="c" :row="obj">这里是内容</slot>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        title: "标题xxxxx",
        content: "内容xxxxx",
      },
    };
  },
};
</script>

<style>
</style>