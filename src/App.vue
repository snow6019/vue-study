<template>
  <section class="todoapp">


    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="输入新计划" autofocus @keydown.enter="add" v-model.trim="name" />
    </header>


    <!-- 列表： -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
          
          <todo v-for="item in arr" :key="item.id" :item="item" @del="del"></todo>

      </ul>
    </section>
    

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>{{nodo}}</strong>未完成 </span>
      <ul class="filters">
        <li>
          <a :class="{selected: num == 1}" href="#/" @click.prevent="change(1)">全部</a>
        </li>
        <li>
          <a :class="{selected: num == 2}" href="#/active" @click.prevent="change(2)">未完成</a>
        </li>
        <li>
          <a :class="{selected: num == 3}" href="#/completed" @click.prevent="change(3)">已完成</a>
        </li>
      </ul>
      <button class="clear-completed" @click="clearDone">清除已完成</button>
    </footer>


  </section>
</template>

<script>
import "./todos.css"
import todo from "./components/todo.vue"
export default {
  data () {
    return {
      name: "",
      list: JSON.parse(localStorage.getItem("todos")) || [],
      arr: JSON.parse(localStorage.getItem("todos")) || [],
      num: 1,
    }
  },
  components:{
    todo
  },
  methods:{
    del(id){
      let i = this.list.findIndex(e=>e.id == id)
      this.list.splice(i,1)
    },
    add(){
      if(this.name == ""){
        return;
      }
      this.list.push({id: Math.random(), name: this.name, isDone: false})
      this.name=""
    },
    clearDone(){
      this.list = this.list.filter(e=>e.isDone==false)
    },
    change(i){
      this.num = i
      if(1==i){
        this.arr = this.list
      } else if(2 == i) {
        this.arr = this.list.filter(x=>x.isDone==false)
      } else if (3 == i) {
        this.arr = this.list.filter(x=>x.isDone==true)
      }
    }
  },
  computed:{
    nodo(){
      return this.list.filter(e=>e.isDone==false).length
    },
    isAll:{
      set(b){
        this.list.forEach(x=>x.isDone=b)
      },
      get(){
        return this.list.every(e=>e.isDone==true)
      }
    }
  },
  watch:{
    list:{
      deep: true,
      handler(){
        this.arr = this.list
        localStorage.setItem("todos",JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>