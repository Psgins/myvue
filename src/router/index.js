import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../features/dashboard/index.vue';
import Landing from '../views/Landing.vue';
import records from './records';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'landing',
    component: Landing,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      records,
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
