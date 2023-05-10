<template>
  <div>
    <div class="box">
        <h3>{{item.title}}</h3>
        <p>价格: {{item.price}}</p>
        <p>折扣: {{item.count}}</p>
        <h4>库存: {{item.kc}}</h4>
        <button @click="item.kc--">sell</button>
    </div>
  </div>
</template>

<script>
export default {
    props:["item"]
}
</script>

<style scoped>
.box{
    width: 200px;
    margin: 2px;
    border: 2px solid black;
}
</style>