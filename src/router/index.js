import { createRouter, createWebHistory } from 'vue-router'

const Cart = () => import('@/views/cart/Cart')
const Category = () => import('@/views/category/Category')
const Home = () => import('@/views/home/Home')
const Mine = () => import('@/views/mine/Mine')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/category',
    component: Category
  },
  {
    path: '/mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
