import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import DetailManga from '../views/DetailManga.vue'
import crud from "../views/crud.vue"
import Admin from "../views/adminUsers.vue"
import KpiView from "../views/KpiView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,

  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/detailManga/:malId',
    name: 'detailManga',
    component: DetailManga,
    props: true,
  },
  {
    path: '/crud',
    name: 'crud',
    component: crud,
  },
  {
    path: '/adminUser',
    name: 'adminuser',
    component: Admin,
  },
  {
    path: '/kpi',
    name: 'kpi',
    component: KpiView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
