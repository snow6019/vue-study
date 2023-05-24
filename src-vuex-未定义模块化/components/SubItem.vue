<template>
  <div>
      <h3>SubItem组件</h3>
      <p>已知库存数1: {{count}}</p>
      <p>已知库存数2: {{num}}</p>
      <button @click="hm_sub(8)">库存-1</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['count','num'])
    },
    methods:{
        // ...mapMutations(['sub']),
        ...mapMutations({hm_sub:'sub'}),
    }
}
</script>