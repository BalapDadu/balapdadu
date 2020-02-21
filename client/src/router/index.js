import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LobbyRoom from '@/views/LobbyRoom'

Vue.use(VueRouter)

const routes = [
  {
    path: '/game',
    name: 'Home',
    component: Home
  },
  {
    path: '/lobby',
    name: 'lobby',
    component: LobbyRoom
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('../components/DiceShake')
  },
  {
    path: '/',
    name: 'Newplayer',
    component: () => import('../views/landingpage.vue')
  },
  {
    path: '/room',
    name: 'Room',
    component: () => import('../views/room.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
