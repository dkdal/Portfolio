<template>
    <section id="domains" class="section">
      <h1>DOMAINS</h1>
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
  import machineLearningIcon from '@/assets/machine-learning.jpg';
  import softwareDevelopmentIcon from '@/assets/software-development.jpg';
  import roboticsIcon from '@/assets/robotics.jpg';
  import voluntaryWorksIcon from '@/assets/volunteer.jpg';
  // import realEstateIcon from '@/assets/real-estate.jpg';

  export default {
    name: "DomainsComponent",
    data() {
      return {
        domains: [
          {
            name: "Machine Learning",
            description: "Building intelligent systems that learn and adapt.",
            icon: machineLearningIcon,
            route: "/machine-learning",
          },
          {
            name: "Software Development",
            description: "Crafting robust, scalable, and user centric applications.",
            icon: softwareDevelopmentIcon,
            route: "/software-development",
          },
          {
            name: "Robotics",
            description: "Designing and programming automated systems.",
            icon: roboticsIcon,
            route: "/robotics",
          },
          {
            name: "Voluntary Works",
            description: "Giving back to society.",
            icon: voluntaryWorksIcon,
            route: "/voluntary-works",
          },
          // {
          //   name: "Realtor",
          //   description: "Leveraging technology to innovate in real estate.",
          //   icon: realEstateIcon,
          //   route: "/real-estate",
          // },
        ],
      };
    },
    methods: {
      navigateToDomain(route) {
        console.log("Navigating to:", route); // Debug
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
      text-align: center;
  }

  .icon-container img {
      width: 300px;
      height: 200px;
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
      grid-template-columns: 1fr;
    }
  }
</style>