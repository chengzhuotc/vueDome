import Vue from 'vue'
import VueRouter from 'vue-router'
import './style/public.css'
import { sync } from 'vuex-router-sync'

import store from './action/store.js'

import add from './view/add.vue'
import app from './view/app.vue'

Vue.use(VueRouter)

window.vm=new Vue()

Vue.config.debug = true

const App = Vue.extend({store})
const router = new VueRouter()


sync(store, router)

router.map({
  '/add': {
    name: 'add',
    component: function (resolve) {
      resolve(add)
    }
  },
  '/app': {
    name: 'app',
    component: function (resolve) {
      resolve(app)
    }
  }
})

router.redirect({
  '*': '/app'
})


router.start(App, '#app')






