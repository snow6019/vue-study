import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import cpt from "./components/cpt.vue"
Vue.component(cpt.name, cpt)

import cpt4 from "./components/04-cpt.vue"
Vue.component(cpt4.name, cpt4)

new Vue({
  render: h => h(App),
}).$mount('#app')
