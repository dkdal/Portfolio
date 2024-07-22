<template>
  <div class="card mb-4">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" class="btn btn-primary" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectComponent',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style scoped>
.card {
  margin: 1rem 0;
}
</style>
