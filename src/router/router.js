// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import HomeComponent from '@/components/HomeComponent.vue';
// import IlustrationComponent from '@/components/IlustrationComponent.vue';
// import ProgramComponent from '@/components/ProgramComponent.vue';
// import IasComponent from '@/components/IasComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomeComponent.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;