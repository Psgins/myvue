const Records = () => import(/* webpackChunkName: "records" */ '../features/records/Main.vue');
const RecordView = () => import(/* webpackChunkName: "records" */ '../features/records/views/View.vue');
const RecordManage = () => import(/* webpackChunkName: "records" */ '../features/records/views/Manage.vue');

const routes = {
  path: 'records',
  component: Records,
  children: [
    {
      path: '',
      component: RecordManage,
    },
    {
      path: ':id',
      component: RecordView,
    },
  ],
};

export default routes;
