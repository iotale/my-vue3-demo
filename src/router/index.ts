import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/home.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: () => import('../views/todo-list.vue'),
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/counter.vue'),
    },
  ],
});
