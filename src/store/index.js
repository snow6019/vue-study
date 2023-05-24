// 1. 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'
// 2. 注册
Vue.use(Vuex)
// 3. 实例化store对象
const store = new Vuex.Store({
    // state：相当于组件 data 初始化数据
    state: {
       // 变量名: 初始值
       count:100,
       num:200
    }
})

// 4. 导出store对象
export default store