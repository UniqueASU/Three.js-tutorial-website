<template>
    <div class="body">
        <h1 class="title">Architecture</h1>
        <p class="paragraph">
            Before we get started, let's take a look at the structure of a Three.js app and understand the components that
            connect together and make the Three.js app
            <img src="/architecture.png" alt="Three.js App Diagram" width="700" height="333">
        </p>

        <p>

        <ul>
            <li><strong>Renderer</strong>: This is typically the top-level component that takes the scene graph and
              camera information to render the visual representation of the scene onto a screen or into an image.</li>

            <li><strong>Scenegraph</strong>: The scene is the root of the graph where all objects are placed. It
              serves as a container for all the objects, lights, and cameras.</li>

            <li><strong>Camera</strong>: The camera defines the point of view from which the scene will be rendered.
              It captures the view based on its parameters like field of view, aspect ratio, near and far clipping planes.</li>

            <li><strong>Mesh</strong>: A mesh is a visible object in the 3D space. It is composed of vertices, edges,
              and faces that define its shape in 3D.</li>

            <li><strong>Object3D</strong>: This is a base class for most objects in three.js and includes any item that
              can be placed in the scene. It's a generic container object for all renderable objects.</li>

            <li><strong>Group</strong>: This is a specific instance of Object3D which can contain multiple child objects,
              allowing them to be controlled as a single entity.</li>

            <li><strong>Light</strong>: Lights affect how materials appear when rendered in the scene, simulating real-world
              lighting conditions.</li>

            <li><strong>Geometry</strong>: Defines the shape of the object. It is a collection of points (vertices) and
              the lines connecting them (edges).</li>

            <li><strong>Material</strong>: Materials define the appearance of the mesh. They describe the color, how it
              reflects light, and whether it is transparent, among other visual characteristics.</li>

            <li><strong>Texture</strong>: Textures are images mapped onto the surfaces of your geometry. They add detail
              to the materials.</li>

        </ul>
        </p>
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
<script setup>
</script>