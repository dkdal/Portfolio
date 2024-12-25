<template>
    <section id="skills" class="section">
      <h1>SKILLS</h1>
      <div class="skills-container">
        <div v-for="skill in skills" :key="skill.name" class="skill-bar">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="bar-container">
            <div
              class="bar"
              :style="{
                width: skill.rating * 10 + '%',
                background: getBarColor(skill.rating),
              }"
            >
              <span class="percentage">{{ skill.rating * 10 }}%</span>
            </div>
          </div>
          <span class="skill-description">{{ getSkillDescription(skill.rating) }}</span>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SkillsComponent",
    data() {
      return {
        skills: [
          { name: "Machine Learning", rating: 7 },
          { name: "System Designing and Architecture", rating: 7 },
          { name: "Cloud Computing", rating: 8 },
          { name: "Backend Development", rating: 9 },
          { name: "Frontend Development", rating: 8 },
          { name: "Databases Management", rating: 9 },
          { name: "Data Structures and Algorithms", rating: 9 },
        ],
      };
    },
    methods: {
      getBarColor(rating) {
        if (rating <= 5) return "linear-gradient(to right, #ff4d4d, #ff9999)"; // Red
        if (rating <= 7) return "linear-gradient(to right, #ffcc00, #ffdd88)"; // Yellow
        return "linear-gradient(to right, #28a745, #88d8a8)"; // Green
      },
      getSkillDescription(rating) {
        if (rating <= 3) return "Beginner";
        if (rating <= 5) return "Intermediate";
        if (rating <= 7) return "Advanced";
        if (rating <= 9) return "Proficient";
        return "Expert";
      },
    },
  };
  </script>
  
  <style scoped>
  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .skill-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 10px 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .skill-bar:hover {
    transform: translateY(-5px);
  }
  
  .skill-name {
    flex: 1;
    font-size: 1rem;
    color: #343a40;
  }
  
  .bar-container {
    flex: 3;
    background-color: #e9ecef;
    border-radius: 5px;
    margin: 0 15px;
    overflow: hidden;
    position: relative;
  }
  
  .bar {
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: white;
    font-size: 0.9rem;
    font-weight: bold;
    transition: width 0.5s ease, background 0.5s ease;
  }
  
  .percentage {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .skill-description {
    flex: 1;
    text-align: right;
    font-size: 1rem;
    color: #343a40;
    font-weight: bold;
    text-transform: capitalize;
  }
  </style>
  
  <style>
  body {
    color: #343a40;
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  #app {
    text-align: center;
    margin-top: 30px;
  }
  
  .section {
    margin: 2rem 0;
  }
  </style>
  