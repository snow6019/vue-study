<template>
  <div>
      <h3>SubItem组件</h3>
      <p>已知库存数1: {{hm_count}}</p>
      <p>已知库存数2: {{hm_num}}</p>
      <button>库存-1</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        // ...mapState(['count','num'])
        ...mapState({hm_count:'count',hm_num:'num'})
    }
}
</script>