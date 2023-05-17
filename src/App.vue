<template>
  <div>
   <div class="footer_wrap">
      <!-- <span @click="goto('/find')">发现音乐</span>
      <span @click="goto('/my')">我的音乐</span>
      <span @click="goto('/friend')">朋友</span> -->

      <!-- <span @click="go('a')">发现音乐</span>
      <span @click="go('b')">我的音乐</span>
      <span @click="go('c')">朋友</span> -->

      <!-- 编程式导航-传参 -->
      <span @click="fn1">黑马</span>
      <span @click="fn2">尚硅谷</span>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goto(path){
      this.$router.push({
        path: path
      })
    },
    go(name){
      this.$router.push({
        name: name
      })
    },
    fn1(){
      this.$router.push({
        name: 'c',
        query:{
          name: "黑马"
        }
      })
    },
    fn2(){
      this.$router.push({
        name: 'c',
        params:{
          name: "尚硅谷",
          age: 12,
          sex:'男'
        }
      })
    }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a, .footer_wrap span{
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover,.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

.router-link-active{
  background-color: blue !important;;
}
</style>