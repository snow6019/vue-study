<template>
  <div>
    <h3>Friend</h3>
    {{$route.query.name}}
    {{$route.params.name}}
    {{$route.params.age}}
    {{$route.params.sex}}
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.query)
    console.log(this.$route.params)
  }
}
</script>

<style>

</style>