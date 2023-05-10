<template>
  <div>
    <div class="box">
        <h3>{{title}}</h3>
        <p>价格: {{price}}</p>
        <p>折扣: {{count}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:["title","price","count"]
}
</script>

<style scoped>
.box{
    width: 200px;
    margin: 2px;
    border: 2px solid black;
}
</style>