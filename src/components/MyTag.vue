<template>
  <div class="my-tag">
    <input ref="inp" class="input" type="text" placeholder="输入标签" v-if="key" @blur="blur" v-model="tag" @keydown.enter="enter"/>
    <div class="text" v-else @dblclick="edit">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props:["value"],
  data(){
    return{
      value: "msg",
      key: false,
      tag:"",
    }
  },
  methods:{
    edit(){
      this.key = true
      this.$nextTick(()=>{
        this.$refs.inp.focus()
      })
      this.tag = this.value
    },
    blur(){
      this.key = false
    },
    enter(){
      this.key = false
      this.$emit("input",this.tag)
    }
  }
};
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>