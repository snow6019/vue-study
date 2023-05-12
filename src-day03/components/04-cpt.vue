<template>
  <div>
    <p id="p1">我是p1</p>
    <p ref="p2">我是p2</p>
    <button @click="get">获取P对象</button>
  </div>
</template>

<script>
export default {
    methods:{
        get(){
            let p1 = document.querySelector("#p1")
            console.log(p1)

            console.log(this.$refs.p2)
        }
    }
}
</script>

<style>

</style>