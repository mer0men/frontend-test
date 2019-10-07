import Vue from 'vue'
import Router from 'vue-router'
import CommentsList from './views/CommentsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CommentsList',
      component: CommentsList
    }
  ]
})
