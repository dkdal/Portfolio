<template>
  <div class="card project-card">
    <div class="card-body">
      <h5 class="card-title text-primary">{{ title }}</h5>
      <p class="card-text">{{ description }}</p>
      <a :href="link" class="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">View Project</a>
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
  margin: 1.5rem 0; /* Adds a bit more spacing between cards */
  border: 1px solid #e0e0e0; /* Light border for definition */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
  border-radius: 0.5rem; /* Rounded corners */
}

.card-body {
  padding: 1.5rem; /* Adds spacing inside the card for better readability */
}

.card-title {
  font-weight: bold; /* Makes the title stand out */
}

.card-text {
  color: #6c757d; /* Subtle text color for the description */
  margin-bottom: 1rem; /* Adds spacing between the text and button */
}

.btn-outline-primary {
  border-color: #007bff;
  color: #007bff;
  font-weight: bold;
}

.btn-outline-primary:hover {
  background-color: #007bff;
  color: white;
}
</style>
