import Vue from 'vue'
import Router from 'vue-router'
import CommentsList from './views/CommentsList.vue'
import NewComment from './views/NewComment.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CommentsList',
      component: CommentsList
    },
    {
      path: '/newcomment',
      name: 'NewComment',
      component: NewComment
    }
  ]
})
