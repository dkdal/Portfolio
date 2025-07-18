<template>
  <div class="container">
    <h1>MACHINE LEARNING</h1>
    <section id="skills" class="section">
      <SkillsComponent :skills="skills" />
    </section>

    <section id="projects" class="section">
      <h1>Projects</h1>
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
import ProjectComponent from '@/components/ProjectComponent.vue';
import SkillsComponent from '@/components/SkillsComponent.vue';
import machineLearningSkillsArray from '@/data/machineLearningSkills';

  export default {
    name: "MachineLearningDomain",
    components: {
      ProjectComponent,
      SkillsComponent
    },
    data() {
      return {
        projects: [
          {
            title: 'Hallucination Resistant Recommender System',
            description: 'Designed a multi-stage pipeline leveraging VectorDB for RAG (Retrieval-Augmented Generation) and integrated Lynx model for faithfulness validation, achieving 90% hallucination detection rate and 90% faithfulness accuracy. Implemented iterative prompt rephrasing and multi-query document retrieval, resulting in an 85% rephrase success rate and 87% retrieval accuracy for relevant documents. Enhanced factual accuracy through web search validation, achieving 88% external validation accuracy and an overall 90% factual accuracy for the system’s recommendations.',
            link: 'https://github.com/dkdal/Hallucination_Resistant_Recommender_System'
          },
          {
            title: 'Code Refactoring Using Deep Learning',
            description: 'Built ML pipeline using Numpy, Pytorch, Transformers to refactor magic number and long statement smells using CodeT5. Generated dataset of 13,000 code samples using GitHub SEART, reverse engineering and Refactoring Miner tool. Visualized the results of CodeBLEU, METEOR and ROGUE-Unigram, Bigram, LCS, using Matplotlib',
            link: 'https://github.com/dkdal/Refactor_Code_Using_Deep_Learning'
          },
          {
            title: 'Image Generation and ML Analysis on AWS',
            description: 'Leveraged LLM-based LimeWire API along with AWS Cognito, Lambda, Step Functions, and API Gateway to allow users to generate high-resolution images seamlessly. Integrated AWS Rekognition’s Label Detection and Face Comparison features, enabling users to analyze generated images and compare human face images with reference photos, driving higher user interaction.',
            link: 'https://github.com/dkdal/Well_Architected_Image_Generation_And_Analysis_On_AWS'
          },
          {
            title: 'Comparative Analysis of Bank Customer Churn Rate Prediction by Machine Learning Algorithms',
            description: 'Designed and implemented a machine learning pipeline to analyze over 27,000 customer records using algorithms like SVM, Neural Networks, Naive Bayes, and Logistic Regression.',
            link: 'https://github.com/dkdal/Bank_Customer_Churn_Rate_Prediction_Using_ML_Algorithms'
          }
        ],
        skills: machineLearningSkillsArray
      }
    }
  };
</script>

<style scoped>
  /* Add styles if needed */
</style>
  