
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from './router/main'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'



Vue.use(Vuetify)

Vue.use(VueRouter)

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
