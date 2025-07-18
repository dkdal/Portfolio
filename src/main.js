import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import MachineLearningDomain from "@/views/MachineLearningDomain.vue";
import SoftwareDevelopmentDomain from "@/views/SoftwareDevelopmentDomain.vue";
import RoboticsDomain from "@/views/RoboticsDomain.vue";
import RealEstateDomain from "@/views/RealEstateDomain.vue";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import VoluntaryWorksDomain from './views/VoluntaryWorksDomain.vue';

library.add(faLinkedin, faGithub, faEnvelope);

// Routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/about-me', component: AboutPage },
  { path: '/machine-learning', name: 'MachineLearningDomain', component: MachineLearningDomain },
  { path: '/software-development', name: 'SoftwareDevelopmentDomain', component: SoftwareDevelopmentDomain },
  { path: '/robotics', name: 'RoboticsDomain', component: RoboticsDomain },
  { path: '/real-estate', name: 'RealEstateDomain', component: RealEstateDomain },
  { path: '/voluntary-works', name: 'VoluntaryWorksDomain', component: VoluntaryWorksDomain },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

console.log("Creating Vue app");

// Create the Vue app
const app = createApp(App);

// Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);
// router.push({path: '/'});

// Mount the app
app.mount('#app');

console.log("Vue app mounted");
console.log('Router:', router);
console.log('Routes:', routes);
