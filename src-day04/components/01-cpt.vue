<template>
  <div>
    <h3 v-color="color1" v-fontsize="20">全局和局部</h3>
    <h3 v-color="color2">全局和局部</h3>
    <button @click="color1=color2='pink'">click me1</button>
    <button @click="color1=color2='yellow'">click me3</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            color1: 'red',
            color2: 'blue',
        }
    },
    directives:{
        fontsize(el,binding){
            el.style.fontSize = binding.value + "px"
        }
    }
}
</script>

<style>

</style>