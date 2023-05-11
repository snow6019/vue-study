import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局自定义指令
Vue.directive("red",{
  inserted(el){
    el.style.backgroundColor="red"
  }
})

Vue.directive("color",{
  inserted(a,b){
    a.style.backgroundColor = b.value
  }
})

// 疯狂跳舞
Vue.directive("dance",{
  inserted(el,binding){
    setInterval(() => {
      let a = Math.floor(Math.random()*256)
      let b = Math.floor(Math.random()* 56)
      let c = Math.floor(Math.random()*256)
      el.style.backgroundColor = `rgb(${a},${b},${c})`
    }, binding.value);
  }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
