<template>
  <div>
    <!-- <cpt-1></cpt-1> -->
    <cpt-2 :value="num" @input="fn"></cpt-2>
    <cpt-3 v-model="num2"></cpt-3>
  </div>
</template>

<script>
import cpt1 from "./components/01-v-model.vue"
import cpt2 from "./components/02-cpt.vue"
import cpt3 from "./components/03-cpt.vue"
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