<template>
  <div>
    <p>价格: {{num}}</p>
  </div>
</template>

<script>
export default {
    props:{
        num:{
            type: Number,
            default: 100
        }
    }
}
</script>

<style>

</style>