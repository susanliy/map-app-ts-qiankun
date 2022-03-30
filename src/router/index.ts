import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/map-app/marker',
  },
  {
    path: '/map-app/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/map-app/marker',
    name: 'marker',
    component: () => import(/* webpackChunkName: "marker" */ '../views/leaflet/marker.vue'),
  },
];

export default routes;
