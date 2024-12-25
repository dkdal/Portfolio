import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';

import HomePage from '@/views/HomePage.vue';
import MachineLearningDomain from "@/views/MachineLearningDomain.vue";
import SoftwareDevelopmentDomain from "@/views/SoftwareDevelopmentDomain.vue";
import RoboticsDomain from "@/views/RoboticsDomain.vue";
import RealEstateDomain from "@/views/RealEstateDomain.vue";

const routes = [
{
    path: "/",
    name: "HomePage",
    component: HomePage,
    },
  {
    path: "/domains/machine-learning",
    name: "MachineLearningDomain",
    component: MachineLearningDomain,
  },
  {
    path: "/domains/software-development",
    name: "SoftwareDevelopmentDomain",
    component: SoftwareDevelopmentDomain,
  },
  {
    path: "/domains/robotics",
    name: "RoboticsDomain",
    component: RoboticsDomain,
  },
  {
    path: "/domains/real-estate",
    name: "RealEstateDomain",
    component: RealEstateDomain,
  },
];

const router = createRouter({
  history: createWebHistory(), // Use "history" mode for cleaner URLs
  routes,
});

const app = createApp(App);
app.use(router);

export default router;