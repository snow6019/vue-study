<template>
  <div>
    <!-- <cpt-1></cpt-1> -->
    <!-- <cpt-2>
      <template v-slot:title>
        <h4>打开房间啊数据库</h4>
      </template>
      <template v-slot:content>
        <ul>
          <li>fdsfasdfsaf</li>
          <li>fdsfasdfsaf</li>
          <li>fdsfasdfsaf</li>
          <li>fdsfasdfsaf</li>
        </ul>
      </template>
    </cpt-2>
    <cpt-2>
      <template #title>
        <h4>图片图片图片</h4>
      </template>
      <template #content>
        <img src="./assets/logo.png" alt="123">
      </template>
    </cpt-2>
    <cpt-3 v-slot="getSon">
      {{getSon}}
      <img :src="getSon.bbb" alt="123">
    </cpt-3> -->
    <cpt-4 v-slot="aaa">
      <h4>{{aaa.obj.name}}</h4>
      <h4>{{aaa.obj.age}}</h4>
      <h4>{{aaa.obj.sex}}</h4>
    </cpt-4>
  </div>
</template>

<script>
import cpt1 from "./components/01-cpt.vue"
import cpt2 from "./components/02-cpt.vue"
import cpt3 from "./components/03-cpt.vue"
import cpt4 from "./components/04-cpt.vue"
export default {
  components:{
    cpt1,
    cpt2,
    cpt3,
    cpt4,
  }
}
</script>

<style>

</style>