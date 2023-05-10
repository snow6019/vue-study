<template>
  <div>
    <ul>
      <li v-for="(obj, i) in list" :key="i">
        {{ obj.id }} {{ obj.name }} {{ obj.age }}
        <button @click="del(i)">删除</button>
        <button @click="add(i)">新增</button>
        <button @click="replace(i)">替换</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张三", age: 20 },
        { id: 2, name: "李四", age: 21 },
        { id: 3, name: "王五", age: 22 },
      ],
    };
  },
  methods: {
    del(i) {
      this.list.splice(i, 1);
    },
    add(i) {
      this.list.splice(i + 1,0,{id: Math.random(), name: "AI", age: 22})
    },
    replace(i){
      this.list.splice(i,1,{id: Math.random(), name: "AI", age: 22})
    }
  },
};
</script>

<style>
</style>