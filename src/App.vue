<template>
  <div>
    <!-- <cpt2 v-for="item in list" :key="item.id" :title="item.title" :price="item.price" :count="item.count"/> -->
    <cpt3/>
  </div>
</template>

<script>
import cpt2 from "./components/02-cpt.vue"
import cpt3 from "./components/03-cpt.vue"
export default {
  data(){
    return{
      list:[
        {id:1,title:"测试1",price:22,count:2},
        {id:2,title:"测试2",price:23,count:3},
        {id:3,title:"测试3",price:24,count:4},
      ],
      num: null
    }
  },
  components: {
    cpt2,
    cpt3
  }
}
</script>

<style>

</style>