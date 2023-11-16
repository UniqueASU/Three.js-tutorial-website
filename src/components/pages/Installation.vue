<template>
    <div class="main-content">
      <h2 class="subsection-title">Get Started</h2>
  
      <h3 class="content-title">Installation</h3>
      <p class="paragraph">
        Every Three.js project needs at least one HTML file to define the webpage, and a JavaScript file to run your Three.js code.
        The structure and naming choices below aren't required, but will be used throughout this guide for consistency.
      </p>
  
      <div class="code-block">
        <pre>
          <code>
            &lt;!DOCTYPE html&gt;
            &lt;html lang="en"&gt;
              &lt;head&gt;
                &lt;meta charset="utf-8"&gt;
                &lt;title&gt;My first Three.js app&lt;/title&gt;
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
      </div>
  
      <h3 class="content-title">main.js</h3>
      <div class="code-block">
        <pre>
          <code>
            import * as THREE from 'three';
  
            // Your Three.js code here
          </code>
        </pre>
      </div>
  
      <h3 class="content-title">public/</h3>
      <p class="paragraph">
        The public/ folder is sometimes also called a "static" folder, because the files it contains are pushed to the website unchanged.
        Usually textures, audio, and 3D models will go here.
      </p>
  
      <h3 class="content-title">Development</h3>
      <p class="paragraph">
        Now that we've set up the basic project structure, we need a way to run the project locally and access it through a web browser.
        Installation and local development can be accomplished with npm and a build tool, or by importing Three.js from a CDN.
        Both options are explained in the sections below.
      </p>
  
      <!-- Add more content as needed -->
  
    </div>
  </template>
  
  <style scoped>
    .main-content {
      padding: 20px;
      font-family: 'Arial', sans-serif;
      font-size: 1.2em;
    }
  
    .subsection-title {
      font-size: 1.5em;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
    }
  
    .content-title {
      font-size: 1.2em;
      font-weight: bold;
      margin-top: 15px;
      margin-bottom: 5px;
    }
  
    .paragraph {
      line-height: 1.5;
      margin-bottom: 15px;
    }
  
    .code-block {
      background-color: #f0f0f0;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
  
    pre {
      margin: 0;
    }
  
    code {
      display: block;
      white-space: pre-wrap;
    }
  </style>
  