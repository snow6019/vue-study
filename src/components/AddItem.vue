<template>
  <div>
      <h3>AddItem组件</h3>
      <p>已知库存数: {{$store.state.goods.count}}</p>
      <button @click="fn">库存+1</button>
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      this.$store.commit('goods/add',5)
    }
  }
}
</script>