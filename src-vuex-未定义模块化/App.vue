<template>
  <div id="app">
    <h1>根组件</h1>
    <button @click="getServerData">（方法1）获取服务器数据</button>
    <button @click="getServer">（方法2）获取服务器数据</button>
    <button @click="hm_server">（方法3）获取服务器数据</button>
    <span>库存总数:</span>
    <input type="text" v-model.number="count">
    <div style="border:1px solid black; width: 300px;">
      <AddItem></AddItem>
    </div>
    <hr>
    <div style="border:1px solid black; width: 300px;">
      <SubItem></SubItem>
    </div>
    <h3>总价1:{{this.$store.getters.all}}</h3>
    <h3>总价2:{{hm_all}}</h3>
    <h3>总价3:{{all}}</h3>
    <h3>总价4:{{sn_all}}</h3>
  </div>
</template>

<script>
import AddItem from '@/components/AddItem'
import SubItem from '@/components/SubItem'
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
  components: {
    AddItem,
    SubItem
  },
  computed:{
    // ...mapState(['count']) 
    count:{
      get(){
        return this.$store.state.count
      },
      set(val){
        this.$store.commit('reset',val)
      }
    },
    hm_all(){
      return this.$store.getters.all
    },
    ...mapGetters(['all']),
    ...mapGetters({sn_all:'all'})
  },
  methods:{
    getServerData(){
      this.$store.dispatch('getServer')
    },
    ...mapActions(['getServer']),
    ...mapActions({hm_server:'getServer'})
  }
}
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border:1px solid #ccc;
  padding:4px;
}
</style>