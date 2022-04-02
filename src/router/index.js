import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/cacahuate-almendra',
    name: 'cacahuate-almendra',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CacahuateAlmendra.vue')
  },
  {
    path: '/ciruela-vainilla',
    name: 'ciruela-vainilla',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CiruelaVainilla.vue')
  },
  {
    path: '/caferojo',
    name: 'caferojo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CafeRojo.vue')
  },
  {
    path: '/chocolate-amargo',
    name: 'chocale-amargo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChocolateAmargo.vue')
  },
  {
    path: '/frutasrojas',
    name: 'frutasrojas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FrutasRojas.vue')
  },
  {
    path: '/pedido',
    name: 'pedido',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedido.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
