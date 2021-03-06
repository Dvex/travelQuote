import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.http.options.root = 'https://testsoat.interseguro.com.pe/talentfestapi'

new Vue({
  el: '#app',
  render: h => h(App)
})
