import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';
import PageNotFound from '../views/PageNotFound.vue';
import Dashboard from '../features/dashboard/index.vue';
import records from './records';
import testfails from './testfail';

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
      testfails,
      {
        path: '*',
        component: PageNotFound,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
