import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  if (to.fullPath === '/login' || to.fullPath === '/register') {
    if (localStorage.getItem('token')) next('/news')
    else next()
  }

  if (to.meta.requiresAuth) {
    if (localStorage.getItem('token')) next()
    else next('/login')
  }

  next()
})

export default router
