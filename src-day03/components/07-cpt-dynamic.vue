<template>
  <div>
    <span :class="{active:num3=='son1'}" @click="num3='son1'">功能1</span>
    <span :class="{active:num3=='son2'}" @click="num3='son2'">功能2</span>
    <span :class="{active:num3=='son3'}" @click="num3='son3'">功能3</span>
    <hr/>
    <component :is="num3"></component>
  </div>
</template>

<script>
import son1 from "./07-son1.vue"
import son2 from "./07-son2.vue"
import son3 from "./07-son3.vue"
export default {
    data(){
        return{
            num: 1,
            num2: 1,
            num3: "son1",
        }
    },
    methods:{
        fn(a){
            this.num = a
        },
        fn2(a){
            this.num2 = a
        }
    },
    components:{
        son1,
        son2,
        son3,
    }
}
</script>

<style scoped>
    span{
        display: inline-block;
        margin: 5px;
        border: 1px solid #000;
        width: 100px;
        height: 30px;
        text-align: center;
    }
    .active{
        background-color: #ccc;
    }
</style>