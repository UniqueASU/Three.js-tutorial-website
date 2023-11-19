<template>
  <div class="body">
    <h1 class="title">Geometries</h1>

    <p class="feature-description">In Three.js, geometries define the shape of 3D objects. They are the mathematical
      descriptions of the object's structure in terms of vertices and faces.</p>
    <p class="feature-description">A vertex is a point in 3D space, and a face is a plane defined by vertices.</p>
    <h2>Code Example:</h2>
    <div class="code-snippet">
      <code>
        const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );<br>
        const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );<br>
        const cylinder = new THREE.Mesh( geometry, material ); scene.add( cylinder );<br>
      </code>
    </div>
    <br>
    <h2>Types of Geometries</h2>
    <ul>
      <li><strong>Basic Geometries:</strong> Includes simple shapes like boxes (BoxGeometry), spheres (SphereGeometry),
        planes (PlaneGeometry), cylinders (CylinderGeometry), cones (ConeGeometry), and more.</li>
      <ol>
        <li><strong>BoxGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>Represents a simple box or cube.</li>
          <li><strong>Usage:</strong>Commonly used for creating simple objects like cubes, rectangular prisms, or as a
            base for more complex structures.</li>
          <li><strong>Constructor:</strong>BoxGeometry(width : Float, height : Float, depth : Float, widthSegments : Integer,
            heightSegments : Integer, depthSegments : Integer)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#BoxGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>SphereGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>Represents a sphere.</li>
          <li><strong>Usage:</strong>Used for creating balls, planets, and other spherical objects.</li>
          <li><strong>Constructor:</strong>SphereGeometry(radius : Float, widthSegments : Integer, heightSegments : Integer,
            phiStart : Float, phiLength : Float, thetaStart : Float, thetaLength : Float)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#SphereGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>PlaneGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>A flat, two-dimensional surface.</li>
          <li><strong>Usage:</strong>Often used for floors, walls, and other flat surfaces.</li>
          <li><strong>Constructor:</strong>PlaneGeometry(width : Float, height : Float, widthSegments : Integer, heightSegments : Integer)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#PlaneGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>CylinderGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>Represents a cylinder.</li>
          <li><strong>Usage:</strong>Useful for creating pipes, tubes, and circular towers.</li>
          <li><strong>Constructor:</strong>CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float,
            radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#CylinderGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>ConeGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>Represents a cone.</li>
          <li><strong>Usage:</strong>Ideal for creating conical shapes like traffic cones or party hats.</li>
          <li><strong>Constructor:</strong>ConeGeometry(radius : Float, height : Float, radialSegments : Integer,
            heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#ConeGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
        <li><strong>TorusKnotGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>Represents a torus knot, a complex, twisted torus shape.</li>
          <li><strong>Usage:</strong>Used for creating intricate decorative objects or complex paths.</li>
          <li><strong>Constructor:</strong>TorusKnotGeometry(radius : Float, tube : Float, tubularSegments : Integer, radialSegments : Integer, p : Integer, q : Integer)</li>
          <iframe title="The BoxBufferGeometry in action" width="100%" height="500" src="https://threejs.org/docs/scenes/geometry-browser.html#TorusKnotGeometry"
                  importance="low" loading="lazy" sandbox="allow-scripts"></iframe>
        </ul>
      </ol>

      <li><strong>Custom Geometries:</strong> Allows for creating complex and custom shapes.</li>
      <ol>
        <li><strong>BufferGeometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>A more efficient and flexible way to define custom geometries.</li>
          <li><strong>Usage:</strong>Essential for creating custom, complex, or performance-intensive geometries.</li>
          <li><strong>Customization:</strong>Allows defining custom vertices, faces, colors, normals, and UVs.
            Ideal for procedurally generated shapes, complex models, or optimizing existing geometries.
          </li>
        </ul>

        <li><strong>Geometry:</strong></li>
        <ul>
          <li><strong>Description:</strong>The base class for most geometries, but less efficient than BufferGeometry.</li>
          <li><strong>Usage:</strong>Used for simple, custom shapes where performance is not a critical concern.</li>
          <li><strong>Customization:</strong>Allows for manually defining vertices, faces, and other attributes, but is
            less efficient than BufferGeometry.</li>
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
