const routes = [
  {
    path: '/',
    name: 'Root',
    meta: { requiresAuth: true },
    redirect: { name: 'NewsList' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/authentication/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/authentication/LoginPage.vue')
  },
  {
    path: '/news',
    name: 'NewsList',
    meta: { requiresAuth: true },
    component: () => import('../views/news/NewsList.vue')
  },
  {
    path: '/news/create',
    name: 'NewsCreate',
    meta: { requiresAuth: true },
    component: () => import('../views/news/NewsForm.vue')
  },
  {
    path: '/categories/create',
    name: 'CategoriesCreate',
    meta: { requiresAuth: true },
    component: () => import('../views/categories/CategoriesForm.vue')
  }
]

export default routes
