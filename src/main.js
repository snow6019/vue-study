import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import cpt from "./components/cpt.vue"
Vue.component(cpt.name, cpt)

import cpt01 from "./components/01-cpt.vue"
Vue.component(cpt01.name, cpt01)

new Vue({
  render: h => h(App),
}).$mount('#app')
