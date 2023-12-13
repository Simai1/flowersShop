import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage";
import RegisterPage from '@/pages/RegisterPage';
import ShopPage from '@/pages/ShopPage';

const routes = [
  {
    path: '/',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registerpage',
    component: RegisterPage
  },
  {
    path: '/shop',
    name: 'shoppage',
    component: ShopPage
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;
