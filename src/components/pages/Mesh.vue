<template>
  <div class="body">
    <h1 class="title">Mesh:Our First visible Object</h1>

    <p class="feature-description">Meshes are the most common kind of visible object used in 3D computer graphics, and
      are used to display all kinds of 3D objects - cats and dogs and humans and trees and buildings and flowers and
      mountains can all be represented using a mesh. </p>
    <p class="feature-description">Mesh consists of geometry (shape) and material (surface properties).</p>
    <img src="/mesh.png" alt="Mesh diagram" width="500" height="333">
    <h2>Creating a Mesh</h2>
    <ul>
      <li><strong>Combining Geometry and Material:</strong></li>
      <ul>
        <li><strong>Geometry:</strong> Defines the shape of the object. It can be as simple as a box, sphere, or plane,
          or as complex as a custom model imported from a 3D modeling software.</li>
        <ul>
          <li><strong>Types of Geometry:</strong></li>
          <ul>
            <li><strong>Basic Geometries:</strong> Box, sphere, plane, cylinder, torus, etc.</li>
            <li><strong>Custom Geometries:</strong> Created using THREE.Geometry or THREE.BufferGeometry for more complex
              shapes.</li>
          </ul>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>Material:</strong> Defines the surface appearance of the geometry. This can include color, texture,
          and how it interacts with light.</li>
        <ul>
          <li><strong>Types of Material:</strong></li>
          <ul>
            <li><strong>Basic Material:</strong> MeshBasicMaterial, unaffected by lights.</li>
            <li><strong>Standard Material:</strong> MeshStandardMaterial, reacts to lighting and supports physical rendering
              properties.</li>
          </ul>
          <iframe title="The MeshBasicMaterial in action" width="100%" height="500" src="https://threejs.org/docs/scenes/material-browser.html#MeshBasicMaterial" importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
      </ul>

      <li><strong>Code Example:</strong></li>
      <div class="code-snippet">
        <code>const geometry = new THREE.BoxGeometry(1, 1, 1);<br>
          const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });<br>
          const cube = new THREE.Mesh(geometry, material);<br>
          scene.add(cube);<br>
        </code>
      </div>
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
