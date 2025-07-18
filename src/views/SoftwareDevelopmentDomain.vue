<template>
    <div class="container">
      <h1>SOFTWARE DEVELOPMENT</h1>
      <section id="skills" class="section">
        <SkillsComponent :skills="skills" />
      </section>
      <section id="skills" class="section">
        <SkillsComponent :skills="techStack" />
      </section>

      <section id="experiences" class="section">
        <h1>WORK EXPERIENCE</h1>
        <div class="card-grid">
          <ExperienceComponent
            v-for="experience in experiences"
            :key="experience.title"
            :title="experience.title"
            :company="experience.company"
            :location="experience.location"
            :date="experience.date"
            :description="experience.description"
          />
        </div>
      </section>

      <section id="projects" class="section">
        <h1>PROJECTS</h1>
        <div class="card-grid">
          <ProjectComponent
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :link="project.link"
          />
        </div>
      </section>
    </div>
</template>
  
<script>
  import ExperienceComponent from '@/components/ExperienceComponent.vue';
  import ProjectComponent from '@/components/ProjectComponent.vue';
  import SkillsComponent from '@/components/SkillsComponent.vue';
  import softwareDevelopmentTechStackArray from '@/data/softwareDevelopmentTechStack.js'
  import softwareDevelopmentSkillsArray from '@/data/softwareDevelopmentSkills.js';

  export default {
    name: "SoftwareDevelopmentDomain",
    components: {
      ExperienceComponent,
      ProjectComponent,
      SkillsComponent
    },
    data() {
      return {
        experiences: [
          {
            title: 'SOFTWARE ENGINEERING COOP',
            company: 'COGNIZANT TECHNOLOGY SOLUTIONS',
            location: 'Halifax, Canada',
            date: 'Sep 2024 - Dec 2024',
            description: 'Developed a Java utility to automatically convert Cobol-based ETL programs into PySpark with 100% accuracy, eliminating manual effort and errors. Achieved broad transformation coverage across 10 complexity levels, reducing development time by 60% and accelerating enterprise ETL modernization.',
          },
          {
            title: 'SENIOR SOFTWARE DEVELOPER',
            company: 'USTHAAN INTEGRATED SOLUTIONS',
            location: 'Mumbai, India',
            date: 'Oct 2020 - Aug 2023',
            description: 'Optimized backend performance by eliminating technical debt and implementing microservices with AWS Lambda, Docker, and Node.js, reducing server load by 12%. Led development of key backend services and user-focused features, boosting engagement by 28% and cutting support tickets by 22%. Spearheaded 2FA implementation, mentored a team of 3, and contributed to recruitment by interviewing 200+ candidates.',       
          },
          {
            title: 'SOFTWARE DEVELOPER',
            company: 'ONLINE GAMES LLC',
            location: 'Gurgaon, India',
            date: 'Sep 2019 - Sep 2020',
            description: 'Built a real-time game assistant using vanilla JavaScript, HTML, and CSS, achieving 87%+ accuracy across 8 game modes for 2–3 players. Designed the architecture, delivered rapid prototypes, and ensured modular, test-driven development for scalable enhancements.',
          },
          {
            title: 'SOFTWARE DEVELOPER INTERN',
            company: 'EVEREST INFRA SERVICES',
            location: 'New Delhi, India',
            date: 'Jun 2018 - Aug 2018',
            description: 'Developed a microservices-based vendor portal with real-time inventory updates, boosting company sales by 25% within 15 days. Improved system performance by implementing robust authentication and optimizing queries, cutting execution time by 50%.',
          },
          {
            title: 'SOFTWARE DEVELOPER',
            company: 'NOW BIKE (Acquired By BORZO)',
            location: 'Noida, India',
            date: 'Jun 2016 - Aug 2017',
            description: 'Optimized delivery operations by integrating Google Maps API and custom Node.js algorithms, reducing travel time and operational costs by 38%. Built a data pipeline with MySQL for actionable logistics insights and enhanced HTML/CSS dashboards, leading to a 35% rise in employee engagement and a 25% reduction in order processing time.',
          },
        ],
        projects: [
          {
            title: 'Image Generation and Analysis on AWS',
            description: 'Utilized AWS Lambda, SQS, SNS, DynamoDB, and Cognito for multifactor login, room bookings, reviews and feedback. Used GCP Looker Studio for usage analytics. Utilized GCP Dialogflow, Functions, Pub/Sub, and Firebase to resolve user queries instantly and chat with property agents.',
            link: 'https://github.com/dkdal/Well_Architected_Image_Generation_And_Analysis_On_AWS'
          },
          {
            title: 'Serverless Hotel Management on AWS and GCP',
            description: 'Leveraged LLM-based LimeWire API along with AWS Cognito, Lambda, Step Functions, and API Gateway to allow users to generate high-resolution images seamlessly. Integrated AWS Rekognition’s for label detection and face comparison features, driving higher user interaction.',
            link: 'https://github.com/dkdal/Serverless_Hotel_Management_On_AWS_GCP'
          },
          {
            title: 'Image Metadata Extractor On Cloud',
            description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
            link: 'https://github.com/dkdal/Image_Metadata_Extractor'
          },
          // {
          //   title: 'Shelter - Residence Solutions',
          //   description: 'Developed a robust, fully tested web portal for managers, tenants, and guests using Java, Spring, Maven and React.js, enabling seamless list management, issue reporting, and solution sharing.',
          //   link: 'https://github.com/dkdal/Shelter_Residence_Solutions'
          // }
        ],
        skills: softwareDevelopmentSkillsArray,
        techStack: softwareDevelopmentTechStackArray
      }
    }
  };
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 2rem 1rem;
}

.section {
  margin-bottom: 3rem;
  text-align: left;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

h1 {
  text-align: center;
}

@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
