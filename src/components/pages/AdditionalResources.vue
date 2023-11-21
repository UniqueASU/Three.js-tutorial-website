<template>
    <div class="additional-resources">
      <h1 class="resources-heading">Want to learn more about Three.js?</h1>
  
      <div class="resource" v-for="(resource, index) in resources" :key="index">
        <h2 class="resource-title">{{ resource.title }}</h2>
        <p class="resource-description">{{ resource.description }}</p>
        <a :href="resource.link" class="resource-link" target="_blank" rel="noopener noreferrer">Explore</a>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resources: [
          {
            title: 'Three.js Official Documentation',
            description: 'The comprehensive official documentation for Three.js. A go-to resource for understanding the library\'s features and updates.',
            link: 'https://threejs.org/docs/'
          },
          {
            title: 'Three.js Fundamentals on MDN',
            description: 'MDN Web Docs provides in-depth explanations and examples for fundamental concepts in Three.js. Great for learning the basics.',
            link: 'https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js'
          },
          {
            title: 'Coursera Course - "Interactive Computer Graphics" by University of Tokyo',
            description: 'A Coursera course that delves into interactive computer graphics, including Three.js. Gain insights from a reputable institution.',
            link: 'https://www.coursera.org/learn/interactive-computer-graphics'
          },
          {
            title: 'Three.js Journey YouTube Channel',
            description: 'Follow the Three.js Journey YouTube channel for video tutorials and practical insights. A visual way to enhance your skills.',
            link: 'https://www.youtube.com/c/ThreejsJourney'
          },
          {
            title: 'Book - "Discover Three.js" by Jos Dirksen',
            description: '"Discover Three.js" by Jos Dirksen provides hands-on examples and projects for learning Three.js effectively.',
            link: 'https://discoverthreejs.com/'
          },
          {
            title: 'GitHub Repository - Three.js Examples',
            description: 'Explore the official Three.js examples repository on GitHub for practical code examples and implementations.',
            link: 'https://github.com/mrdoob/three.js'
          },
          {
            title: 'Udacity Course - "Interactive 3D Graphics" by Google',
            description: 'Udacity offers a course on interactive 3D graphics, including a section on Three.js. Learn from industry experts.',
            link: 'https://www.udacity.com/course/interactive-3d-graphics--cs291'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
    .additional-resources {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      font-family: 'Arial', sans-serif;
    }
  
    .resources-heading {
      font-size: 2em;
      font-weight: bold;
      margin-bottom: 20px;
    }
  
    .resource {
      text-align: center;
      margin-bottom: 30px;
    }
  
    .resource-title {
      font-size: 1.5em;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .resource-description {
      font-size: 1.2em;
      line-height: 1.5;
      margin-bottom: 10px;
    }
  
    .resource-link {
      color: #0066cc;
      text-decoration: underline;
      font-weight: bold;
    }
  </style>
  