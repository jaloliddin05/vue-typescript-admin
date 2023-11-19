import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../pages/product/ProductPage.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../pages/product/ProductDetail.vue'),
      },
      {
        path: 'type',
        component: () => import('../pages/type/TypePage.vue'),
      },
      {
        path: 'type/:id',
        component: () => import('../pages/type/TypeDetail.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
