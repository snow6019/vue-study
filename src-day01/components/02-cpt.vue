<template>
  <div>
    <div class="box">
        <h3>{{title}}</h3>
        <p>价格: {{price}}</p>
        <p>折扣: {{count}}</p>
        <h4>库存: {{kc}}</h4>
        <button @click="fn">sell</button>
    </div>
  </div>
</template>

<script>
export default {
    props:["title","price","count","kc","id"],
    methods:{
      fn(){
        this.$emit("goodNumDown",this.id)
      }
    }
}
</script>

<style scoped>
.box{
    width: 200px;
    margin: 2px;
    border: 2px solid black;
}
</style>