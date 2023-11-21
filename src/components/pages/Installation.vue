<template>
  <div class="main-content">
    <h1 class="main-heading">Getting Started with Three.js - Installation</h1>

    <p class="view-content">
      Begin your journey into Three.js by setting up a basic project structure. Follow these steps to create a simple project and initiate your exploration with Three.js.
    </p>

    <h2 class="analysis-heading">Project Structure</h2>

    <p class="view-content">
      For any Three.js project, you'll need an HTML file to define the webpage and a JavaScript file to execute your Three.js code. While the structure and naming choices provided are not mandatory, they offer consistency throughout this guide.
    </p>

    <h3 class="analysis-heading">index.html</h3>

    <pre class="code">
      <code>
        &lt;!DOCTYPE html&gt;
        &lt;html lang="en"&gt;
          &lt;head&gt;
            &lt;meta charset="utf-8"&gt;
            &lt;title&gt;Demo three.js app&lt;/title&gt;
            &lt;style&gt;
              body { margin: 0; }
            &lt;/style&gt;
          &lt;/head&gt;
          &lt;body&gt;
            &lt;script type="module" src="/main.js"&gt;&lt;/script&gt;
          &lt;/body&gt;
        &lt;/html&gt;
      </code>
    </pre>

    <h3 class="analysis-heading">main.js</h3>

    <pre class="code">
      <code>
        import * as THREE from 'three';

        // Your Three.js code will be here...

        // Example: If you want to create a scene
        const scene = new THREE.Scene();

      </code>
    </pre>

    <h3 class="analysis-heading">public/</h3>

    <p class="view-content">
      Now that the basic project structure is in place, let's explore how to run the project locally and access it through a web browser.
    </p>

    <h2 class="analysis-heading">Local Development</h2>

    <p class="view-content">
      To kickstart installation and local development, you have two options: utilizing npm and a build tool or importing Three.js from a CDN. Both approaches are detailed below.
    </p>

    <h3 class="analysis-heading">Option 1: Install with NPM and a Build Tool</h3>

    <h4 class="analysis-heading">Development</h4>

    <p class="view-content">
      For most users, using npm and a build tool is the recommended approach. Follow these steps:
    </p>

    <pre class="code">
      <code>
        # Install Node.js to manage dependencies and run the build tool
        npm install --save three
        npm install --save-dev your-build-tool
        # Run the local server
        npx your-build-tool
      </code>
    </pre>

    <p class="view-content">
      If all goes well, a URL like <code>http://localhost:5173</code> will appear in your terminal. Open this URL in your web browser to view your Three.js web application.
    </p>

    <p class="view-content">
      The initial page will be blank, indicating you are ready to create a scene.
    </p>

    <h3 class="analysis-heading">Option 2: Import from a CDN</h3>

    <h4 class="analysis-heading">Development</h4>

    <p class="view-content">
      To install without build tools, make the following adjustments to the project structure:
    </p>

    <pre class="code">
      <code>
        &lt;script type="importmap"&gt;
          {
            "imports": {
              "three": "https://unpkg.com/three@&lt;version&gt;/build/three.module.js",
              "three/addons/": "https://unpkg.com/three@&lt;version&gt;/examples/jsm/"
            }
          }
        &lt;/script&gt;
      </code>
    </pre>

    <p class="view-content">
      Replace <code>&lt;version&gt;</code> with an actual version of Three.js, like "v0.149.0". Find the most recent version on the npm version list.
    </p>

    <p class="view-content">
      Run a local server to host these files at a URL accessible to the web browser.
    </p>

    <pre class="code">
      <code>
        # Install Node.js, then run serve to start a local server in the project's directory:
        npx serve .
      </code>
    </pre>

    <p class="view-content">
      If everything went well, a URL like <code>http://localhost:3000</code> will appear in your terminal. Open this URL in your web browser to view your Three.js web application.
    </p>

    <p class="view-content">
      The initial page will be blank, indicating you are ready to create a scene.
    </p>

    <h2 class="analysis-heading">Conclusion</h2>

    <p class="view-content">
      Congratulations! Your Three.js project is set up, and you're ready to delve into the creation of immersive 3D experiences. In the upcoming sections, we'll explore various concepts to enhance your Three.js skills.
    </p>
  </div>
</template>

<style scoped>
  .main-content {
    padding: 40px 30px;
    margin: 0px 20px;
    font-family: 'Arial', sans-serif;
    font-size: 1.2em;
  }

  .main-heading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .analysis-heading {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .view-content, .conclusion-content {
    margin-bottom: 20px;
  }

  .code {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    overflow-x: auto;
  }
</style>
