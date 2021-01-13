const testfail = () => import(/* webpackChunkName: "testfail" */ '../features/testfail/Main.vue');

const routes = {
  path: 'testfail',
  component: testfail,
};

export default routes;
