<template>
  <div class="body">
    <h1 class="title">The Renderer</h1>

    <section class="introduction">
      <p>In Three.js, the renderer is a critical component that takes the scene and camera and translates them into a visual representation on the screen. </p>
    </section>

    <ol>
      <li><strong>Role of the Renderer</strong></li>
      <ul>
        <li><strong>Primary Function:</strong> The renderer in Three.js is responsible for drawing the content of a 3D scene onto the screen.</li>
        <li><strong>Connection between Scene and Display:</strong> It acts as a bridge between the 3D world of the scene and the 2D display of the canvas.</li>
      </ul>
      <li><strong>Types of Renderers</strong></li>
      <ul>
        <li><strong>WebGLRenderer:</strong> The most commonly used renderer in Three.js, leveraging WebGL for rendering.
          It provides a good balance between performance and visual quality.</li>
        <li><strong>CSS3DRenderer:</strong> Used for rendering 3D objects with CSS3 transformations, mainly for DOM elements rather than graphical content.</li>
        <li><strong>SVGRenderer:</strong>Allows rendering scenes as SVG. It’s less common and typically used for specific cases where vector graphics are needed.</li>
      </ul>
      <li><strong>Creating a WebGL Renderer</strong></li>
      <ul>
        <li><strong>Initialization:</strong></li>
        <div class="code-snippet">
          <code>
            const renderer = new THREE.WebGLRenderer({ antialias: true });<br>
            renderer.setSize(window.innerWidth, window.innerHeight);<br>
            document.body.appendChild(renderer.domElement);
          </code>
        </div>
        <li><strong>Antialiasing:</strong> Enabled in the constructor for smoother edges.</li>
        <li><strong>Setting Size:</strong>The size of the renderer is set to fill the entire browser window in this example.</li>
        <li><strong>Adding to DOM:</strong>The renderer's DOM element is added to the HTML document.</li>
      </ul>
      <li><strong>Renderer Properties</strong></li>
      <ul>
        <li><strong>Pixel Ratio: </strong>Setting renderer.setPixelRatio(window.devicePixelRatio) ensures the renderer performs well on high-resolution displays.</li>
        <li><strong>Clear Color: </strong> The background color of the canvas can be set using renderer.setClearColor(color, alpha).</li>
        <li><strong>Setting Size:</strong>The size of the renderer is set to fill the entire browser window in this example.</li>
        <li><strong>Shadow Map:</strong>Enabling shadow maps allows certain lights to cast shadows, adding realism.</li>
      </ul>
      <li><strong>Rendering a Scene</strong></li>
      <ul>
        <li><strong>Basic Render Loop:</strong></li>
        <div class="code-snippet">
          <code>
            function animate() {<br>
            requestAnimationFrame(animate);<br>
            renderer.render(scene, camera);<br>
            }<br>
            animate();<br>
          </code>
        </div>
        <li><strong>Continuous Rendering: </strong> Using requestAnimationFrame for smooth animations and interactivity.</li>
      </ul>
    </ol>

  </div>
</template>

<style scoped>
.body {
  padding: 20px 50px;
  font-family: 'Arial', sans-serif;
  font-size: 1.2em;
}

.title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}

.feature-list li {
  font-weight: bold;
  margin-top: 10px;
}

.code-snippet {
  background-color: #eee;
  border-left: 3px solid #f36d33;
  color: #666;
  font-family: monospace;
  padding: 10px 20px;
  overflow: auto;
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

strong {
  font-weight: bold;
}


.feature-description {
  margin-bottom: 15px;
}
</style>
