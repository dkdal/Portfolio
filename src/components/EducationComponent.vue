<template>
  <section class="education-section">
    <h2>EDUCATION</h2>
    <div class="education-grid">
      <div class="education-item" v-for="(education, index) in educationList" :key="index">
        <h3>{{ education.degree }}</h3>
        <p><strong>Institution:</strong> {{ education.institution }}</p>
        <p><strong>Location:</strong> {{ education.location }}</p>
        <p><strong>Year:</strong> {{ education.year }}</p>
        <p><strong>Grade:</strong> {{ education.grade }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EducationComponent",
  data() {
    return {
      educationList: [
        {
          degree: "Master's in Applied Computer Science",
          institution: "Dalhousie University",
          location: "Halifax, Canada",
          year: "2023 - 2024",
          grade: "A+",
        },
        {
          degree: "Bachelor of Technology",
          institution: "Guru Gobind Singh Indraprastha University (GGSIPU)",
          location: "New Delhi, India",
          year: "2015 - 2019",
          grade: "A",
        },
      ],
    };
  },
};
</script>

<style scoped>
.education-section {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

h2 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

/* Layout styling */
.education-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.education-item {
  flex: 0 1 calc(50% - 20px); /* 2 items per row with 20px gap */
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  min-width: 300px;
}

.education-item h3 {
  margin: 0;
  color: #0077b5;
}

.education-item p {
  margin: 5px 0;
  color: #555;
}

/* Responsive fallback for smaller screens */
@media (max-width: 600px) {
  .education-item {
    flex: 1 1 100%;
  }
}
</style>
