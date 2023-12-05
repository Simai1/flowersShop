import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "@/pages/LoginPage";


const routes = [
  {
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  },
 
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;
