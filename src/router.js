import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import TaskTemplateBuilder from './views/task-template-builder'
import Home from './views/home'
import Auth from './views/auth'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Task-Template-Builder',
      path: '/task-template-builder',
      component: TaskTemplateBuilder,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Auth',
      path: '/auth',
      component: Auth
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },

  ],
})
