import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/features',
      name: 'feat',
      component: () => import('../views/Features.vue'),
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('../views/Documentation.vue'),
    },
  ],
})

export default router
