<template>
  <div>
    <p v-for="item in list" :key="item.title"> {{item.title}} 的库存: {{item.kc}}</p>
    <!-- <cpt-2 v-for="item in list" :key="item.id" :title="item.title" :price="item.price" :count="item.count" :kc="item.kc" :id="item.id"
    @goodNumDown="fnn"/> -->
    <cptt-2 v-for="item in list" :key="item.id" :item="item"/>
    <!-- <cpt3/> -->
  </div>
</template>

<script>
import cpt2 from "./components/02-cpt.vue"
import cptt2 from "./components/02-cptt.vue"
import cpt3 from "./components/03-cpt.vue"
export default {
  data(){
    return{
      list:[
        {id:1,title:"测试1",price:22,count:2,kc:10},
        {id:2,title:"测试2",price:23,count:3,kc:20},
        {id:3,title:"测试3",price:24,count:4,kc:30},
      ],
      num: null
    }
  },
  methods:{
    fnn(id){
      let i = this.list.findIndex(item => item.id === id)
      this.list[i].kc--
    }
  },
  components: {
    cpt2,
    cpt3,
    cptt2
  }
}
</script>

<style>

</style>