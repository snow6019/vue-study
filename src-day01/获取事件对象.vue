<template>
  <div>
    <h3>获取事件对象</h3>
    <button @click="fn">btn</button><br/>
    <a @click="fn2" href="www.itcast.cn">黑马</a><br/>
    <a @click="fn3(2,$event)" href="www.itcast.cn2">黑马2</a><br/>
  </div>
</template>

<script>
export default {
  methods:{
    fn(e){
      console.log(e)
    },
    fn2(e){
      e.preventDefault()
    },
    fn3(a,e){
      console.log(a)
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>