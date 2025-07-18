<template>
  <div class="experience-card">
    <div class="experience-header">
      <h3 class="experience-title">{{ title }}</h3>
      <span class="experience-date">{{ date }}</span>
    </div>
    <div class="experience-header">
      <h4 class="experience-company">{{ company }}</h4>
      <span class="experience-location">{{ location }}</span>
    </div>
    <p class="experience-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ExperienceComponent',
  props: {
    title: String,
    company: String,
    location: String,
    date: String,
    description: String
  }
}
</script>

<style scoped>
.experience-card {
  padding: 1.75rem;
  margin: 1.5rem 0;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.experience-card:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.experience-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0077b5;
}

.experience-date {
  font-size: 0.95rem;
  color: #888;
}

.experience-company {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 2rem;
  color: #555;
}

.experience-location {
  font-size: 0.95rem;
  color: #999;
  margin-bottom: 2rem;
}

.experience-description {
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
}
</style>
