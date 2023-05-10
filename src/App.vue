<template>
  <div>
    <!-- <cpt-1></cpt-1> -->
    <!-- <cpt-2 :value="num" @input="fn"></cpt-2>
    <cpt-3 v-model="num2"></cpt-3> -->
    <!-- <cpt-4/> -->
    <cpt-5 ref="aaa"/>
    <button @click="get">获取</button>
  </div>
</template>

<script>
import cpt1 from "./components/01-v-model.vue"
import cpt2 from "./components/02-cpt.vue"
import cpt3 from "./components/03-cpt.vue"
import cpt4 from "./components/04-cpt.vue"
import cpt5 from "./components/05-cpt.vue"
export default {
  data(){
    return{
      num: 100,
      num2: 100,
    }
  },
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
    cpt5,
  },
  methods:{
    fn(a){
      this.num += a
    },
    get(){
      console.log(this.$refs.aaa.info)
      this.$refs.aaa.fn()
    }
  }
}
</script>

<style>

</style>