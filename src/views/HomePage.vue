<template>
  <div id="app" class="container">
    <section id="about" class="section">
      <div class="about-card">
        <div class="about-image">
          <img src="@/assets/linkedInDP.jpeg" alt="Me"/>
        </div>
        <div class="about-text">
          <p>"Fight for it until you own it"</p>
          <p> Keep Hustling!</p>
          <p>Cheers!!</p>
          <span class="nav-link">
            <a href="/about-me">Read About Me</a>
          </span>
        </div>
      </div>
    </section>
    
    <SkillsComponent :skills="skills" />
    <DomainsComponent />

    <!-- <section id="contact" class="section">
      <h1>CONTACT</h1>
      <p>
        <a href="mailto:dhruv.kapoor@dal.ca">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
        <a href="https://www.linkedin.com/in/kapoor-dhruv" target="_blank" rel="noopener noreferrer" class="linkedin-icon">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a><br><br>
      </p>
    </section> -->
  </div>
  <FooterComponent />
</template>

  
<script>
  import SkillsComponent from '.././components/SkillsComponent.vue'
  import DomainsComponent from '.././components/DomainsComponent.vue'
  import FooterComponent from '.././components/FooterComponent.vue'
  import skillsArray from '@/data/skills.js'
  
  export default {
    name: 'HomePage',
    mounted() {
      console.log("HomePage mounted");
    },
    setup() {
      console.log("HomePage setup");
    },
    components: {
      SkillsComponent,
      DomainsComponent,
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
            title: 'Refactor Code Using Deep Learning',
            description: 'Built ML pipeline using Numpy, Pytorch, Transformers to refactor magic number and long statement smells using CodeT5. Generated dataset of 13,000 code samples using GitHub SEART, reverse engineering and Refactoring Miner tool. Visualized the results of CodeBLEU, METEOR and ROGUE-Unigram, Bigram, LCS, using Matplotlib.',
            link: 'https://github.com/dkdal/Refactor_Code_Using_Deep_Learning'
          },
          {
            title: 'Image Metadata Extractor On Cloud',
            description: 'Engineered an advanced metadata extraction tool for images using Nodejs and React, automating email notifications with AWS SNS for enhanced data management. Leveraged AWS services including S3, API Gateway, Step Functions, Lambda, and Secrets Manager, deploying infrastructure with AWS CloudFormation for robust, scalable, and secure operations.',
            link: 'https://github.com/dkdal/Image_Metadata_Extractor'
          }
        ],
        projects: [
          {
            title: 'Shelter - Residence Solutions',
            description: 'Developed a robust, fully tested web portal for managers, tenants, and guests using Java, Spring, Maven and React.js, enabling seamless list management, issue reporting, and solution sharing.',
            link: 'https://github.com/dkdal/Shelter_Residence_Solutions'
          },
          {
            title: 'Comparative Analysis of Bank Customer Churn Rate Prediction by Machine Learning Algorithms',
            description: 'Designed and implemented a machine learning pipeline to analyze over 27,000 customer records using algorithms like SVM, Neural Networks, Naive Bayes, and Logistic Regression.',
            link: 'https://github.com/dkdal/Bank_Customer_Churn_Rate_Prediction_By_ML_Algorithms'
          }
        ],
        skills: skillsArray
      }
    }
  }
</script>
  
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
  
  .about-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .about-image {
    flex: 1;
    padding: 10px;
  }
  
  .about-image img {
    width: 60%;
    height: auto;
    border-radius: 10px;
  }
  
  .about-text {
    flex: 2;
    padding: 20px;
    text-align: left;
  }
  
  .about-text p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #343a40;
  }
  
  h1 {
    color: #007bff;
    margin-bottom: 1rem;
  }
  
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
    align-items: stretch;
    padding: 1rem;
  }
  
  a {
    color: #007bff;
  }
  
  a:hover {
    color: #0056b3;
  }

  .fa-envelope {
    color: red;
    margin-right: 0.5rem;
  }

  .nav-link {
  font-size: 1.1rem;
  font-weight: 500;
  color: #0056b3;
  text-decoration: none;
  padding: 0 5px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-link:hover {
  color: #003d80;
}


</style>