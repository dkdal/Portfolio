<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">DHRUV KAPOOR</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experiences">Experiences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
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
.navbar-nav .nav-link {
  margin-right: 1rem;
}

/* Social Icons Styling */
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
