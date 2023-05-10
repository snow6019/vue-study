<template>
  <section class="todoapp">


    <!-- 头部：输入框 -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" placeholder="输入新计划" autofocus @keydown.enter="add" v-model.trim="name" />
    </header>


    <!-- 列表： -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
          
          <todo v-for="item in list" :key="item.id" :item="item" @del="del"></todo>

      </ul>
    </section>
    

    <!-- 底部：状态栏 -->
    <footer class="footer">
      <span class="todo-count">剩余<strong>0</strong>未完成 </span>
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
      <button class="clear-completed">清除已完成</button>
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
      list: [
        { id: 1, name: '吃饭', isDone: true },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '打豆豆', isDone: true }
      ]
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
    }
  }
}
</script>

<style>

</style>