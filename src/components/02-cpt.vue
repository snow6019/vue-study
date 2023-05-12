<template>
  <div>
    <p>xxx标题</p><button @click="show=!show">{{show?"折叠":"展开"}}</button>
    <div v-show="show">
        <slot>
            <img src="../assets/logo.png" alt="xxx">
        </slot>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            show: true
        }
    }
}
</script>

<style>

</style>