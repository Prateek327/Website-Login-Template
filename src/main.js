import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store  from './store/index'
import Vuelidate from 'vuelidate'
import VueResource from 'vue-resource'


Vue.use(Vuelidate)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
