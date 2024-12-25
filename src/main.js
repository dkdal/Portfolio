import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Add icons to the Font Awesome library
library.add(faLinkedin, faGithub, faEnvelope);

const app = createApp(App);

// Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the Vue Router
app.use(router);

app.mount('#app');
