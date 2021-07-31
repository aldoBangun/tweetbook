import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/PageHome.vue'
import PageLogin from '../views/PageLogin.vue'
import PageRegister from '../views/PageRegister.vue'
import PageNotFound from '../views/PageNotFound.vue'


const router = createRouter({

   history: createWebHistory(),
   routes: [
      {
         name: 'home',
         path: '/',
         component: PageHome
      },
      {
         name: 'login',
         path: '/login',
         component: PageLogin
      },
      {
         name: 'register',
         path: '/register',
         component: PageRegister
      },
      {
         name: 'not-found',
         path: '/:path(.*)',
         component: PageNotFound
      }
   ]

})


export default router