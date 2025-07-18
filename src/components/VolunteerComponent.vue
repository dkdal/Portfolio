<template>
    <div class="card">
        <div class="card-title">
            <h3 class="title">{{ title }}</h3>
            <span class="date">{{ date }}</span>
        </div>
        <span class="location">{{ location }}</span>
        <p class="card-text">{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VolunteerComponent',
    props: {
      title: String,
      location: String,
      date: String,
      description: String,
    }
  }
  </script>
  
  <style scoped>
  .card {
    padding: 1.75rem;
    margin: 1.5rem 0; /* Adds a bit more spacing between cards */
    border: 1px solid #e0e0e0; /* Light border for definition */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow */
    border-radius: 0.5rem; /* Rounded corners */
  }
  
  .location {
    font-size: 0.95rem;
    color: #999;
    margin-bottom: 1rem;
  }
  
  .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #0077b5;
  }
  
  .date {
    font-size: 0.95rem;
    color: #888;
  }

  .card-text {
    font-size: 1rem;
    color: #444;
    line-height: 1.6;
  }
  
  .btn-outline-primary {
    border-color: #007bff;
    color: #007bff;
    font-weight: bold;
  }
  
  .btn-outline-primary:hover {
    background-color: #007bff;
    color: white;
  }
  </style>
  