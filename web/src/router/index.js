import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage";
import RegisterPage from '@/pages/RegisterPage';

import ShopPage from '@/pages/ShopPage';
import AboutPage from '@/pages/AboutPage';
import MePage from '@/pages/MePage';
import BasketPage from '@/pages/BasketPage';

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
  {
    path: '/about',
    name: 'aboutpage',
    component: AboutPage
  },
  {
    path: '/me',
    name: 'mepage',
    component: MePage
  },
  {
    path: '/basket',
    name: 'basketpage',
    component: BasketPage
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;
