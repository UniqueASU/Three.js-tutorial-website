<template>
  <div class="main-content">
    <h2 class="subsection-title">Get Started</h2>

    <h3 class="content-title">Installation</h3>
    <p class="paragraph">
      Every Three.js project needs at least one HTML file to define the webpage, and a JavaScript file to run your
      Three.js code.
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
      The public/ folder is sometimes also called a "static" folder, because the files it contains are pushed to the
      website unchanged.
      Usually textures, audio, and 3D models will go here.
    </p>

    <h3 class="content-title">Development</h3>
    <p class="paragraph">
      Now that we've set up the basic project structure, we need a way to run the project locally and access it through a
      web browser.
      Installation and local development can be accomplished with npm and a build tool, or by importing Three.js from a
      CDN.
      Both options are explained in the sections below.
    </p>

    <section>
      <h2 class="center">Including three.js in Your Projects</h2>
      <p class="paragraph">Integrating three.js into your JavaScript application is a breeze. There are various methods, some
        straightforward and others a bit more intricate, but they all revolve around including the three.js core in your
        project.</p>

      <p class="paragraph">The core file, <em>three.module.js</em> can be found in the three.js repository:</p>
      <li class="inline-code-block ">three.module.js</li>

      <p class="paragraph">Additionally, you might want to enhance your project with plugins like camera controls or post-processing. These
        plugins are located in the <em>examples/jsm</em> folder on the repository, and the inclusion process is similar to
        that of the core file.</p>

      <p class="paragraph">For the purposes of this chapter, we'll use the <em>OrbitControls</em> plugin, a popular camera controls plugin.
        You can find it in the repository:</p>
      <pre><code>examples/jsm/controls/OrbitControls.js</code></pre>

      <p class="paragraph">For this lesson, we will assume that in the example setup, we have organized these files inside the
      <code>vendor/</code> folder:
      </p>
      <ul>
        <li>The core is at <code>vendor/three/build/three.module.js</code></li>
        <li><em>OrbitControls</em> is at <code>vendor/three/examples/jsm/controls/OrbitControls.js</code></li>
      </ul>

      <p class="paragraph">We've also created a simple web page consisting of three files:</p>
      <ul>
        <li><code>index.html</code></li>
        <li><code>src/main.js</code></li>
        <li><code>styles/main.css</code></li>
      </ul>

      <p class="paragraph">Note that in <strong>index.html</strong>, we have referenced <strong>main.js</strong> in the
        <strong>head</strong> section:
      </p>
      <pre class="code-block"><code>&lt;script type="module" src="./src/main.js"&gt;&lt;/script&gt;</code></pre>

      <p class="paragraph"> The <span class="inline-code-block ">type="module"</span>, tells the browser that the linked file is JS module. If <span
          class="inline-code-block ">index.html</span> is unfamiliar, refer to the HTML and CSS Reference. For those who are new
        to JavaScript modules, explore the JavaScript Modules Reference in the appendices.</p>
    </section>

    <section>
      <h2 class="center">Importing three.js Modules</h2>
      <p class="paragraph">With the current example in mind, The core and OrbitControls plugins in three.js are JS modules. We first need to
        import them to use them in <span class="inline-code-block ">main.js</span>. We will see various ways to import three.js
        modules into the project.
      </p>

      <h3 class="center">Importing the three.js Core</h3>
      <p class="paragraph">The three.js core encompasses numerous classes, including cameras, materials, geometries, textures, lights, and
        more. For this chapter, let's assume we want to import only three classes: <span
          class="inline-code-block ">PerspectiveCamera</span>,
        <span class="inline-code-block ">MeshStandardMaterial</span>, and <span class="inline-code-block ">WebGLRenderer</span>.
      </p>

      <h4 class=center>Import the Entire three.js Core</h4>
      <p class="paragraph">The simplest approach is to import everything from the three.js core into <span class="inline-code-block ">main.js</span>
        under the
        <span class="inline-code-block ">THREE</span> namespace:
      </p>
      <pre class="code-block"><code>import * as THREE from './vendor/three/build/three.module.js';</code></pre>
      <p class="paragraph">Now we can access any element using the <span class="inline-code-block ">THREE</span> namespace and the dot notation:</p>
      <pre class="code-block">

        THREE.PerspectiveCamera;
        THREE.MeshStandardMaterial;>
        THREE.Texture;
      </pre>

      <h4 class="center">Import Individual Components from the Core</h4>
      <p class="paragraph">One can also import the classes specifically that are needed:</p>
      <pre class="code-block">
        import {
          PerspectiveCamera,
          MeshStandardMaterial,
          WebGLRenderer,
        } from "./vendor/three/build/three.module.js";</pre>

      <p class="paragraph">This approach encourages careful consideration of the classes used in a module, promoting best practices and
        smaller, focused modules.</p>

      <h3 class=center>Importing Plugins</h3>
      <p class="paragraph">The <span class="inline-code-block ">OrbitControls.js</span> module contains a single export, the
        <span>OrbitControls</span> class.
        Importing it works similarly to importing core classes:
      </p>
      <pre
        class="code-block"><span>import { OrbitControls } from "./vendor/three/examples/jsm/controls/OrbitControls.js";</span></pre>
    </section>

    <section>
      <h1 class=center>Obtaining three.js Files</h1>
      <p class="paragraph"> Lets see how to get access to Three.js files. Here are some common practices: </p>
      <h2 class=center>How to Acquire three.js Files</h2>
      <p class="paragraph">Before diving in, let's explore how to obtain the necessary three.js files. While the editor provides these
        files, if you're working locally, you'll need to handle this process yourself. Here are three common approaches:
      </p>
      <ol>
        <li><strong>Download Them All!</strong><br>
          The simplest method is to download the entire three.js Github repo to your computer. Extract the contents,
          specifically from the <strong>build/</strong> and <strong>examples/jsm/</strong> folders, into a
          <strong>vendor/</strong> directory.
        </li>

        <li><strong>Link to the Files from a CDN</strong><br>
          Another approach is linking files from a CDN (Content Delivery Network). One supporting loading modules is <a
            href="https://cdn.skypack.dev/" target="_blank" rel="noopener noreferrer">skypack.dev</a>. For example, you
          can find the core <span class="inline-code-block ">three.module.js</span> file <a
            href="https://cdn.skypack.dev/three@0.132.2" target="_blank" rel="noopener noreferrer">here</a>.

          You can also choose not to specify the version, which will always pick up the latest version.
          <a href="https://cdn.skypack.dev/three@0.132.2" target="_blank" rel="noopener noreferrer">here</a>.

          However, Ensure to specify the version to avoid unexpected changes.

          When it comes to loading plugins, you can reference them using the structure of the repo, so you'll find
          OrbitControls.js here:

          https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js

          Importing the files from a CDN works the same way as importing them from your local file system, except that now
          we are loading the files from skypack.dev instead of from our hard drive:

          <pre class="code-block">
            import {
              Camera,
              Material,
              Texture,
            } from "https://cdn.skypack.dev/three@0.132.2";

            import { OrbitControls } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js";
          </pre>
        </li>

        <li><strong>Install three.js as an NPM Package</strong><br>
          If you're familiar with JavaScript package management, consider installing three.js as an NPM package. Assuming
          you have Node.js and NPM installed, execute the following commands in your project directory:
          <pre class="code-block">
            npm init
            npm install --save three
          </pre>
          Importing files then involves referencing the package name, like <span>'three'</span> for core files or
          specifying the module path for plugins.

          <pre class="code-block">
            import {
              Camera,
              Material,
              Texture,
            } from 'three/build/three.module.js';

            import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
          </pre>
        </li>   
      </ol>
    </section>

  </div>
</template>

<style scoped>

body {
    background-color: black;
    color: white;
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.main-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3, h4 {
    color: #42a5f5; /* Blue color */
    text-align: center;
}

h2.subsection-title {
    color: #64b5f6; /* Light Blue color */
}

h3.content-title {
    color: #90caf9; /* Another shade of Blue */
}

p.paragraph {
    margin-bottom: 15px;
}

.code-block {
    background-color: #263238; /* Dark Blue-Grey color */
    padding: 15px;
    overflow-x: auto;
    border-radius: 5px;
}

pre {
    margin: 0;
}

li.code-block {
    list-style-type: none;
    background-color: #263238; /* Dark Blue-Grey color */
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 15px;
}

a {
    color: #81d4fa; /* Light Blue color */
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.center {
    text-align: center;
}

.inline-code-block {
    background-color: #546e7a; /* Slightly lighter Blue-Grey color */
    padding: 2px 5px;
    border-radius: 3px;
    display: inline;
}

/* .body {
  padding: 20px 50px;
  font-family: 'Arial', sans-serif;
  font-size: 1.2em;
}

.title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.paragraph {
  line-height: 1.5;
  margin-bottom: 15px;
}

li {
  font-weight: bold;
  margin-top: 10px;
  padding-bottom: 20px;
}

img {
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
}
.main-content {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  font-size: 1.2em;
}

.code-block {
  background-color: #070606;
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

h1, h2, h3, h4 {
    text-align: center;
    background-color: rgb(201, 133, 133);
} */

</style>
  