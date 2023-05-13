<template>
  <div>
    <h4>slot作用域</h4>
    <!-- <slot :lxname="obj.name" :lxage="obj.age" :lxsex="obj.sex">
        {{obj.name}}--{{obj.age}}--{{obj.sex}}
    </slot> -->
    <slot :obj="obj">
        {{obj.name}}--{{obj.age}}--{{obj.sex}}
    </slot>
  </div>
</template>

<script>
export default {
    data(){
        return{
            obj:{
                name: "zs",
                age: 20,
                sex: "男"
            }
        }
    }
}
</script>

<style>

</style>