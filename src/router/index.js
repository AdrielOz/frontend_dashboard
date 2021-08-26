import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { isLogged } from '../utils/auth'

Vue.use(VueRouter)

// {
//   path: '/pages/login',
//   name: 'pages-login',
//   component: () => import('@/views/pages/Login.vue'),
//   meta: {
//     layout: 'blank',
//   },
// },

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      requireAuth: true,
      title: 'dashboard',
      noCache: false
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

function existToken(){
  return !!localStorage.getItem('token_id')
}

const whiteList = ['/login']


router.beforeEach((to, from, next) => {
  const isUserLogged = isLogged();
  if (isUserLogged) {
    if (to.path === '/login') {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.matched[0] ? to.matched[0].path : '') !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
  // const rutaProtegida = to.matched.some(record => record.meta.requireAuth)
  // if (rutaProtegida && localStorage.getItem('token_id') === null) {
  //   next({ name: 'pages-login' })
  // } else {
  //   next()
  // }
})


export default router
