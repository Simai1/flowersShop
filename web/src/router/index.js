import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage";
import RegisterPage from '@/pages/RegisterPage';


const routes = [
  {
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'registerpage',
    component: RegisterPage
  },
 
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;
