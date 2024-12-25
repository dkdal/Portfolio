<template>
    <section id="domains" class="section">
      <h1>Domains I Can Work In</h1>
      <div class="card-container">
        <div
          v-for="domain in domains"
          :key="domain.name"
          class="domain-card"
          @click="navigateToDomain(domain.route)"
        >
          <div class="icon-container">
            <img :src="domain.icon" alt="Domain Icon" />
          </div>
          <div class="card-content">
            <h3>{{ domain.name }}</h3>
            <p>{{ domain.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "DomainsComponent",
    data() {
      return {
        domains: [
          {
            name: "Machine Learning",
            description: "Building intelligent systems that learn and adapt.",
            icon: "https://img.icons8.com/color/96/machine-learning.png",
            route: "/domains/machine-learning",
          },
          {
            name: "Software Development",
            description: "Crafting robust, scalable, and efficient applications.",
            icon: "https://img.icons8.com/color/96/software-development.png",
            route: "/domains/software-development",
          },
          {
            name: "Robotics",
            description: "Designing and programming automated systems.",
            icon: "https://img.icons8.com/color/96/robot-2.png",
            route: "/domains/robotics",
          },
          {
            name: "Realtor",
            description: "Leveraging technology to innovate in real estate.",
            icon: "https://img.icons8.com/color/96/real-estate.png",
            route: "/domains/real-estate",
          },
        ],
      };
    },
    methods: {
      navigateToDomain(route) {
        this.$router.push(route);
      },
    },
  };
  </script>
  

  <style scoped>
#domains {
  padding: 3rem 0;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 800px;
    justify-items: center;
    margin: 2rem auto;
}

.domain-card {
    background: #f8f9fa;
    /* border: 1px solid; */
    border-radius: 10px;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 100%;
    max-width: 280px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
}

.domain-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.icon-container {
    background: linear-gradient(135deg, #0fffff, #00c6ff);
    padding: 20px;
    text-align: center;
}

.icon-container img {
    width: 100%;
    height: 100%;
}

.card-content {
    padding: 20px;
    text-align: center;
}

.card-content h3 {
    font-size: 1.2rem;
    color: #007bff;
    margin-bottom: 10px;
}

.card-content p {
    font-size: 1rem;
    color: #343a40;
}

.section {
  margin: 2rem 0;
}

@media (max-width: 768px) {
    .card-container {
        grid-template-columns: 1fr; /* 1 column on small screens */
  }
}
</style>