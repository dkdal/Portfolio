<template>
  <section id="skills" class="section">
    <h3>SKILLS</h3>
    <div class="skills-container">
      <div class="column">
        <div v-for="(skill, index) in skillsLeft" :key="index" class="skill-bar">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-label">{{ getSkillLabel(skill.rating) }}</span>
          </div>
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
        </div>
      </div>
      <div class="column">
        <div v-for="(skill, index) in skillsRight" :key="index" class="skill-bar">
          <div class="skill-header">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-label">{{ getSkillLabel(skill.rating) }}</span>
          </div>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SkillsComponent",
    props: {
      skills: Array
    },    
    computed: {
      skillsLeft() {
        return this.skills.slice(0, Math.ceil(this.skills.length / 2));
      },
      skillsRight() {
        return this.skills.slice(Math.ceil(this.skills.length / 2));
      },
    },
    methods: {
      getBarColor(rating) {
        if (rating <= 3) return "linear-gradient(to right, #d9534f, #f7b2b1)"; // red
        if (rating <= 5) return "linear-gradient(to right, #f0ad4e, #fde4b2)"; // orange
        if (rating <= 7) return "linear-gradient(to right, #ffeb6a, #fff176)"; // lighter yellow
        if (rating <= 9) return "linear-gradient(to right, #7abcac, #5ac89a)"; // sea-green
        return "linear-gradient(to right, #5cb85c, #b7e7b7)"; // green
      },

      getSkillLabel(rating) {
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
/* General styles */
.section {
  padding: 0rem 1rem;
  text-align: center;
}

h3 {
  color: blue;
}

/* Skills container styles */
.skills-container {
  display: flex;
  justify-content: center;
  gap: 3rem;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
}

.skill-bar {
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.skill-bar:hover {
  transform: translateY(-5px);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.skill-name {
  font-size: 0.9rem;
  color: #343a40;
  font-weight: bold;
}

.skill-label {
  font-size: 0.6rem;
  color: #6c757d; /* Different color for label */
  font-weight: bold;
  text-transform: capitalize;
}

.bar-container {
  width: 100%;
  background-color: #e9ecef;
  border-radius: 5px;
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
  position: relative;
  font-size: 0.8rem;
}
</style>
