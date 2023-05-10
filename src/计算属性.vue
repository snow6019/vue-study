<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll"/>
    <button >反选</button>
    <ul>
      <li v-for="(obj,i) in arr" :key="i">
        <input type="checkbox" v-model="obj.c" />
        <span>{{obj.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
    };
  },
  computed:{
    // isAll:{
    //   set(val){
    //     this.arr.forEach(x=>x.c = val)
    //   },
    //   get(){
    //     return this.arr.every(x=>x.c === true)
    //   }
    // }
    isAll(){
      return this.arr.every(x=>x.c === true)
    }
  }
};
</script>

<style>
</style>