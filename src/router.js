import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateBug from './views/CreateBug.vue'
import Detail from './views/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'CreateBug',
      component: CreateBug
    },
    {
      path: '/detail:id',
      name: 'Detail',
      component: Detail
    }

  ]
})
