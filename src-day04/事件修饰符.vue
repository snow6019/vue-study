<template>
  <div>
    <h3>事件修饰符</h3>
    <a href="www.itcast.cn" @click.prevent="fn">黑马</a><br/>
    <div class="father" @click="fn2">
      <div class="son" @click.stop="fn1"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fn(){
      console.log(1)
    },
    fn1(){
      console.log("儿子")
    },
    fn2(){
      console.log("父亲")
    }
  }
}
</script>

<style>
  .father{
    width: 200px;
    height: 200px;
    background-color: #222;
  }
  .son{
    width: 100px;
    height: 100px;
    background-color: pink;
  }
</style>