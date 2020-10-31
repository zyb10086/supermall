import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'

const Home = () => import("views/home/Home")
const Category = () => import("views/category/Category")
const Cart = () => import("views/cart/Cart")
const Profile = () => import("views/profile/Profile")

//1.安装插件
Vue.use(Router)

//2.创建路由对象
const routes = [

  {
    path: '',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },

  {
    path: '/category',
    component: Category
  },

  {
    path: '/Cart',
    component: Cart
  },

  {
    path: '/profile',
    component: Profile
  }
  
]

const router = new VueRouter({
  routes,
  mode: "history"
})

// 3.导出路由
export default router