<template>
  <div id="app">
    <NavbarComponent />
    <section id="about">
      <h1>ABOUT ME</h1>
      <p>Greeting Everyone!. I welcome you all to visit my profile.</p>
    </section>
    <section id="experiences">
      <h1>WORK EXPERIENCES</h1>
      <ExperienceComponent
        v-for="experience in experiences"
        :key="experience.title"
        :title="experience.title"
        :description="experience.description"
        :link="experience.link"
      />
    </section>
    <section id="projects">
      <h1>PROJECTS</h1>
      <ProjectComponent
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :link="project.link"
      />
    </section>
    <section id="contact">
      <h1>CONTACT</h1>
      <p>Email:
        <a href="mailto:dhruv.kapoor@dal.ca">dhruv.kapoor@dal.ca</a><br>
        <a href="mailto:kapoordhruv22@gmail.com">kapoordhruv22@gmail.com</a>
      </p>
    </section>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    ExperienceComponent,
    ProjectComponent,
    FooterComponent
  },
  data() {
    return {
      experiences: [
        {
          title: 'Refactor Code Using Deep Learning',
          description: 'Built ML pipeline using Numpy, Pytorch, Transformers to refactor magic number and long statement smells using CodeT5. Generated dataset of 13,000 code samples using GitHub SEART, reverse engineering and Refactoring Miner tool. Visualized the results of CodeBLEU, METEOR and ROGUE-Unigram, Bigram, LCS, using Matplotlib.',
          link: 'https://github.com/dkdal/Refactor_Code_Using_Deep_Learning'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        }
      ],
      projects: [
        {
          title: 'Refactor Code Using Deep Learning',
          description: 'Built ML pipeline using Numpy, Pytorch, Transformers to refactor magic number and long statement smells using CodeT5. Generated dataset of 13,000 code samples using GitHub SEART, reverse engineering and Refactoring Miner tool. Visualized the results of CodeBLEU, METEOR and ROGUE-Unigram, Bigram, LCS, using Matplotlib.',
          link: 'https://github.com/dkdal/Refactor_Code_Using_Deep_Learning'
        },
        {
          title: 'Image Metadata Extractor On Cloud',
          description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
          link: 'https://github.com/dkdal/Image_Metadata_Extractor'
        },
        {
          title: 'Shelter - Residence Solutions',
          description: 'Developed a robust, fully tested web portal for managers, tenants, and guests using Java, Spring, Maven and React.js, enabling seamless list management, issue reporting, and solution sharing. Enhanced portal usability by implementing interactive search, sorting, and filtering functionalities, and adhering to Web. Content Accessibility Guidelines (WCAG) to provide audio support for individuals with hearing impairments.',
          link: 'https://github.com/dkdal/Shelter_Residence_Solutions'
        },
        {
          title: 'Comparative Analysis of Bank Customer Churn Rate Prediction by Machine Learning Algorithms',
          description: 'Designed and implemented a machine learning pipeline to analyze over 27,000 customer records using algorithms like SVM, Neural Networks, Naive Bayes, and Logistic Regression. Improved customer retention and engagement, achieving a 71% boost in bank customer relationship predictions.',
          link: 'https://github.com/dkdal/Bank_Customer_Churn_Rate_Prediction_By_ML_Algorithms'
        },
        {
          title: 'College Online Notice Board',
          description: 'Developed an interactive college notice portal using Bootstrap, Node.js, and Express.js, featuring advanced search, sorting functionalities, and an intuitive UI/UX for seamless notice management. Increased user engagement by 25% through real-time notifications and streamlined notice accessibility, enhancing communication efficiency for students and administrators.',
          link: 'https://github.com/dkdal/Online_Notice_Board_First_Cut'
        },
        {
          title: 'College Online Result Management System',
          description: 'Developed an interactive college notice portal using Bootstrap, Node.js, and Express.js, featuring advanced search, sorting, and real-time notifications to enhance notice accessibility. Increased user engagement by 25% and streamlined administrative communication through a user-friendly interface and efficient notice management system.',
          link: 'https://github.com/dkdal/Online_Result_Management_System'
        }
      ]
    }
  }
}
</script>

<style>
body {
  /* background: url('./assets/testImage.jpg') no-repeat center center fixed;
  background-size: cover; */
  color: #343a40;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.container {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
}
section {
  margin: 2rem 0;
}
h1 {
  color: #007bff;
}
a {
  color: #007bff;
}
a:hover {
  color: #0056b3;
}

</style>
