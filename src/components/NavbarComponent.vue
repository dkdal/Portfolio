<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark no-space">
    <div class="container-fluid">
      <a class="navbar-brand" href="/about-me"><img src="@/assets/linkedInDP.jpeg" height="30px" width="30px" class="brand-icon">DHRUV KAPOOR</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about-me">About Dhruv</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/machine-learning">Machine Learning</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/software-development">Software Development</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/robotics">Robotics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/voluntary-works">Volunteering</a>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link" href="/real-estate">Real Estate</a>
          </li> -->
        </ul>
      </div>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/kapoor-dhruv" target="_blank" rel="noopener noreferrer" class="linkedin-icon">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/dkdal" target="_blank" rel="noopener noreferrer" class="github-icon">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="mailto:dhruv.kapoor@dal.ca">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavbarComponent'
  }
</script>

<style scoped>
  .navbar {
    margin-top: -30px;
    margin-bottom: 20px;
  }

  .navbar-nav .nav-link {
    margin-right: 1rem;
  }

  .brand-icon {
    border-radius: 50%;
    margin-right: 0.2rem;
  }

  .social-icons a {
    margin-left: 1rem; /* Add spacing between icons */
    font-size: 1.5rem;
    text-decoration: none;
  }

  .linkedin-icon {
    color: #0077b5; /* LinkedIn blue */
  }

  .linkedin-icon:hover {
    color: #005582; /* Slightly darker blue on hover */
  }

  .github-icon {
    color: #28a745; /* GitHub green */
  }

  .github-icon:hover {
    color: #1e7b34; /* Slightly darker green on hover */
  }
</style>
