<template>
  <NavbarComponent />
  <router-view />
</template>

<script>
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';

  export default defineComponent({
    name: 'App',
    components: {
      NavbarComponent
    },
    mounted() {
      console.log("App component mounted");
    },
    setup() {
      const route = useRoute();
      console.log('Current route:', route.path);
    },
  });
</script>
