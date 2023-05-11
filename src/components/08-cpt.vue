<template>
  <div>
    <h4 v-blue>自定义局部指令</h4>
  </div>
</template>

<script>
export default {
    directives:{
        blue:{
            inserted(el){
                el.style.backgroundColor = "blue"
            }
        }
    }
}
</script>

<style>

</style>