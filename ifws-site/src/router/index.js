// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ServiceView from '@/views/ServiceView.vue';
import ClientView from '@/views/ClientView.vue';
import TeamView from '@/views/TeamView.vue';
import ContactView from '@/views/ContactView.vue';
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/services', name: 'Services', component: ServiceView },
  { path: '/clients', name: 'Clients', component: ClientView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
