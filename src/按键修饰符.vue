<template>
<div>
  <h3>按键修饰符</h3>
  <input type="text" @keydown.enter="fn1" @keydown.esc="fn2"/>
</div>
</template>

<script>
export default {
  methods: {
    fn1() {
      console.log(1)
    },
    fn2() {
      console.log(2)
    }
  }
}
</script>

<style>

</style>