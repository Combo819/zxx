import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/time',
      name: 'time',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Time.vue'),
    },
    {
      path:'/xiaoxiao',
      name:'xiaoxiao',
      component: () => import(/* webpackChunkName: "about" */ './views/xiaoxiao.vue'),
    },
    {
      path:'/combo',
      name:'combo',
      component:()=>import('./views/Combo.vue')
    }
  ],
});
