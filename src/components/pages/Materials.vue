<template>
  <div class="body">
    <h1 class="title">Materials</h1>

    <p class="feature-description">In Three.js, materials define how the surface of a geometry looks and reacts to light.
      Materials are essential for giving 3D objects their appearance, texture, and visual depth.</p>
    <p class="feature-description">Materials in Three.js determine the color, texture, and reflective properties of a
      geometry's surface.They also define how the surface interacts with light, such as how it reflects or absorbs light.</p>

    <h2>Types of Materials</h2>
    <ul>
      <ol>
        <li><strong>MeshBasicMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>A material that is not affected by lights.</li>
          <li><strong>Usage:</strong>Ideal for objects that require a flat or unlit appearance, like background objects or UI elements.</li>
          <li><strong>Key Properties:</strong>Color, wireframe, opacity, transparent.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshBasicMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>MeshStandardMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>A physically-based material offering more realistic metalness and roughness properties.</li>
          <li><strong>Usage:</strong>Ideal for creating more physically accurate and realistic-looking materials.</li>
          <li><strong>Key Properties:</strong>Color, roughness, metalness, normal map.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshStandardMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>MeshPhysicalMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>An extension of MeshStandardMaterial that offers more advanced physical properties.</li>
          <li><strong>Usage:</strong>Used for achieving high-quality realism, particularly in photorealistic scenes.</li>
          <li><strong>Key Properties:</strong>Reflectivity, clearcoat parameters.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshPhysicalMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>MeshLambertMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>A material that reflects light in a non-shiny, matte way.</li>
          <li><strong>Usage:</strong>Suitable for non-shiny surfaces like rough plastic or matte paint.</li>
          <li><strong>Key Properties:</strong>Color, emissive color, reflectivity.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshLambertMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>MeshPhongMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>A material with a shiny surface and specular highlights.</li>
          <li><strong>Usage:</strong>Good for shiny surfaces like metals, plastics, or varnished wood.</li>
          <li><strong>Key Properties:</strong>Color, specular color, shininess.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshPhongMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>MeshToonMaterial:</strong></li>
        <ul>
          <li><strong>Description:</strong>Gives a cartoon-like, cel-shaded look.</li>
          <li><strong>Usage:</strong>Suitable for stylized, non-realistic rendering like cartoons or games.</li>
          <li><strong>Key Properties:</strong>Color, gradient map.</li>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500"
                  src="https://threejs.org/docs/scenes/material-browser.html#MeshToonMaterial" importance="low"
                  loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
      </ol>
    </ul>



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

.feature-list li {
  font-weight: bold;
  margin-top: 10px;
}

.feature-description {
  margin-bottom: 15px;
}
</style>
