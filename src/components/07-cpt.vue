<template>
  <div>
    <span :class="{active:num==1}" @click="fn(1)">功能1</span>
    <span :class="{active:num==2}" @click="fn(2)">功能2</span>
    <span :class="{active:num==3}" @click="fn(3)">功能3</span>
    <hr/>
    <button @click="fn2(Math.floor(Math.random()*3)+1)">切换</button>
    <son-1 v-if="num2 == 1"/>
    <son-2 v-else-if="num2 == 2"/>
    <son-3 v-else/>
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
        }
    },
    methods:{
        fn(a){
            this.num = a
        },
        fn2(a){
            console.log(a)
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