<template>
    <div id="app" class="container">
      <section id="about" class="section">
        <h1>DHRUV KAPOOR</h1>
        <div class="about-card">
          <div class="about-image">
            <img src="@/assets/linkedInDP.jpeg" alt="Me" />
          </div>
          <div class="about-text">
            <p>Greeting Everyone! I welcome you all to visit my profile.</p>
            <p>
              I am a passionate and promising professional experienced and delivering user centeric products. I have keen interest in technology and have hands-on experience in software development, cloud computing, machine learning, and more. I enjoy working on challenging problems and building scalable, efficient, and innovative solutions.
            </p>
          </div>
        </div>
      </section>
      <EducationComponent />
    </div>
</template>

<script>
import EducationComponent from '@/components/EducationComponent.vue';
  
  export default {
    name: 'AboutPage',
    components: {
      EducationComponent
    },
  }
</script>