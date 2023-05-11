<template>
  <div>
    <h4 v-red>$nextTick</h4>
    <p ref="p">{{num}}</p>
    <button @click="fn">+1</button>
    <hr/>
    <button v-if="show" @click="fn2">点击</button>
    <input v-else type="text" ref="p" />
  </div>
</template>

<script>
export default {
    data(){
        return{
            num:1,
            show: true
        }
    },
    methods:{
      fn(){
        this.num++
        console.log(this.$refs.p.innerHTML)
        this.$nextTick(()=>{
          console.log("===>"+this.$refs.p.innerHTML)
        })
      },
      fn2(){
        this.show = false
        console.log(this.$refs.p)

        this.$nextTick(()=>{
          this.$refs.p.focus()
        })
      }
    }
}
</script>

<style>

</style>