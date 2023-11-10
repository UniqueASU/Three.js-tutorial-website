import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetStarted from '../components/GetStarted.vue';
import Home from '../components/Home.vue';
import ThreeJS from '../components/pages/ThreeJS.vue';
import References from '../components/pages/References.vue';
import Navbar from '../components/pages/Navbar.vue';
import OurView from '../components/pages/OurView.vue';
import Introduction from '../components/pages/Introduction.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/references',
      name: 'references',
      component: References,
      meta: {
        layout: Navbar
      }
    },
    {
      path: '/ourview',
      name: 'ourview',
      component: OurView,
      meta: {
        layout: Navbar
      }
    },
    {
      path: '/threejs',
      name: 'threejs',
      component: ThreeJS,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: GetStarted
    }
  ]
})

export default router
