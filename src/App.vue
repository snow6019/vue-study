<template>
  <div>
    <!-- <cpt-1></cpt-1> -->
    <!-- <cpt-2 :value="num" @input="fn"></cpt-2>
    <cpt-3 v-model="num2"></cpt-3> -->
    <!-- <cpt-4/> -->
    <!-- <cpt-5 ref="aaa"/> -->
    <!-- <button @click="get">获取</button> -->
    <!-- <cpt-6/> -->
    <!-- <cpt-7/> -->
    <!-- <cpt-7dynamic/> -->
    <!-- <h3 v-red>测试</h3>
    <cpt-8/>
    <h3 v-blue>测试222</h3>
    <h3 v-color="'pink'">测试223</h3> -->
    <hr/>
    <h4 v-dance="time">测试1：疯狂跳舞</h4>
    <button @click="time=50000">慢下来</button>
    <button @click="time=50">快起来</button>
  </div>
</template>

<script>
import cpt1 from "./components/01-v-model.vue"
import cpt2 from "./components/02-cpt.vue"
import cpt3 from "./components/03-cpt.vue"
import cpt4 from "./components/04-cpt.vue"
import cpt5 from "./components/05-cpt.vue"
import cpt6 from "./components/06-cpt.vue"
import cpt7 from "./components/07-cpt.vue"
import cpt7dynamic from "./components/07-cpt-dynamic.vue"
import cpt8 from "./components/08-cpt.vue"
export default {
  data(){
    return{
      num: 100,
      num2: 100,
      time: 500
    }
  },
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
    cpt5,
    cpt6,
    cpt7,
    cpt7dynamic,
    cpt8,
  },
  methods:{
    fn(a){
      this.num += a
    }
  }
}
</script>

<style>

</style>