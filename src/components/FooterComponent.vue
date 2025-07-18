<template>
  <footer class="footer mt-auto py-3 bg-light">
    <div class="container text-center">
      <span class="text-muted">&copy; {{ currentYear }} Dhruv Kapoor</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
