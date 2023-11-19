<template>
  <div class="body">
    <h1 class="title">The Scene</h1>

    <p class="feature-description">The scene is a holder for everything we can see. It defines a coordinate
      system called World Space, which is our main frame of reference when working with visible objects in three.js.</p>
    <img src="/coordinate-system.png" alt="Coordinate system diagram" width="500" height="333">
    <p class="feature-description">World space is a 3D Cartesian coordinate system.</p>
    <p class="feature-description">The very center of the scene is the point (0,0,0), also called the origin of
      the coordinate system. Whenever we create a new object and add it to our scene, it will be placed at the
      origin, and whenever we move it around, we do so within this coordinate system.</p>
    <p class="feature-description">When we add objects to the scene, they are placed into the scene graph which
      is a tree structure with the scene at the top.</p>
    <img src="/scene-graph.png" alt="Scene graph" width="500" height="333">
    <h2>Creating a Scene</h2>
    <ul>
      <li><strong>Initialization:</strong> A new instance of a scene is created using new THREE.Scene().</li>
      <li><strong>Code Example:</strong></li>
    <div class="code-snippet">
      <code>const scene = new THREE.Scene();</code>
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
