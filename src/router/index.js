import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetStarted from '../components/GetStarted.vue';
import Home from '../components/Home.vue';
import ThreeJS from '../components/pages/ThreeJS.vue';
import References from '../components/pages/References.vue';
import Navbar from '../components/pages/Navbar.vue';
import OurView from '../components/pages/OurView.vue';
import Introduction from '../components/pages/Introduction.vue';
import Installation from '../components/pages/Installation.vue';
import Architecture from '../components/pages/Architecture.vue';
import DemoVideo from '../components/pages/DemoVideo.vue';
import Walkthrough from '../components/pages/Walkthrough.vue';
import Fundamentals from '../components/pages/Fundamentals.vue';
import TheScene from "../components/pages/TheScene.vue";
import TheRenderer from "../components/pages/TheRenderer.vue";
import TheCamera from "../components/pages/TheCamera.vue";
import Mesh from "../components/pages/Mesh.vue";




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
      path: '/architecture',
      name: 'architecture',
      component: Architecture,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/walkthrough',
      name: 'walkthrough',
      component: Walkthrough,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/fundamentals',
      name: 'fundamentals',
      component: Fundamentals,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/demovideo',
      name: 'demovideo',
      component: DemoVideo,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/installation',
      name: 'installation',
      component: Installation,
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
    },
    {
      path: '/thescene',
      name: 'thescene',
      component: TheScene,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/therenderer',
      name: 'therenderer',
      component: TheRenderer,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/thecamera',
      name: 'thecamera',
      component: TheCamera,
      meta: {
        layout: GetStarted
      }
    },
    {
      path: '/mesh',
      name: 'mesh',
      component: Mesh,
      meta: {
        layout: GetStarted
      }
    },
  ]
})

export default router
