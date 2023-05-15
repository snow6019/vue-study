<template>
  <div>
    <h3>下面是张图片</h3>
    <slot :bbb="imgSrc">
      {{ imgSrc }}
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
    };
  },
};
</script>

<style>
</style>