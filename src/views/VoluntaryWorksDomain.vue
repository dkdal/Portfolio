<template>
    <div class="container">
      <h1>Voluntary Works</h1>
      <section id="projects" class="section">
        <div class="card-grid">
          <VolunteerComponent
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :location="project.location"
            :date="project.date"
            :description="project.description"
          />
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import VolunteerComponent from '@/components/VolunteerComponent.vue';
  
    export default {
      name: "VoluntaryWorksDomain",
      components: {
        VolunteerComponent
      },
      data() {
        return {
          projects: [
            {
              title: 'Food Supply and Distribution',
              location: 'Halifax, Canada',
              date: 'Mar 2024 - Mar 2025',
              description: 'Supported Khalsa Aid Group for supply and distribution of free food for immigrants facing difficulties in meeting rising living cost in Halifax.',
            },
            {
              title: 'Community Education Projects',
              location: 'Delhi, India',
              date: 'Aug 2011 - Jun 2013',
              description: 'Over 2 years I supported 4 different volunteer sites, teaching 12 students as part of Government of India’s Saakshar Bharat Mission'
            }
          ]
        }
      }
    };
  </script>
  
  <style scoped>
    /* Add styles if needed */
  </style>