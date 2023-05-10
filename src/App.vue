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
          
          <todo v-for="item in list" :key="item.id" :item="item" @del="del"></todo>

      </ul>
    </section>
    

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>{{nodo}}</strong>未完成 </span>
      <ul class="filters">
        <li>
          <a class="selected" href="#/">全部</a>
        </li>
        <li>
          <a href="#/active">未完成</a>
        </li>
        <li>
          <a href="#/completed">已完成</a>
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
      list: JSON.parse(localStorage.getItem("todos")) || []
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
      this.list.forEach(x=>{
        if(x.isDone) {
          let i = this.list.findIndex(e=>e.id == x.id)
          this.list.splice(i,1)
        }
      })
    }
  },
  computed:{
    nodo(){
      let num = 0
      this.list.forEach(x=> x.isDone ? num+=0 : num+=1)
      return num
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
        localStorage.setItem("todos",JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>