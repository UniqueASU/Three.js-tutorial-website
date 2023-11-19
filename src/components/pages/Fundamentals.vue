<template>
  <div class="body">
    <h1 class="title">Fundamentals</h1>

    <h2 class="subtitle">The Components of a Real-Time 3D App</h2>
    <p class="paragraph">
      The basic components that make up every three.js app:
    </p>
    <img src="/component-diagram.png" alt="Component diagram" width="500" height="333">

    <ul class="feature-list">
      <li>The Scene</li>
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
      <p class="feature-description">Code</p>
      <p class="feature-description">The constructor takes no parameters.</p>
      <p class="feature-description">
        import { Scene } from 'three';
        const scene = new Scene();</p>
      <li>The Camera</li>
      <p class="feature-description">The Camera is like a Telescope pointed at the Scene</p>
      <p class="feature-description">To view the scene, we need to open a window into this realm and convert into
        something that makes sense to our human eyes, and that’s where the camera comes in.</p>
      <p class="feature-description">There are several ways to convert the scene graphic into a human vision friendly
        format, using techniques called projections.</p>

      <ol>
        <li>Perspective Projection</li>
        <li>Orthographic Projection</li>
      </ol>

      <br>

      <p class="feature-description">The most important type of projection, for us, is perspective projection, which is
        designed to match the way our eyes see the world. To view the scene using perspective projection, we use the
        <b>PerspectiveCamera</b>. </p>
      <p class="feature-description">This type of camera is the 3D equivalent of a camera in the real world and uses many of the
        same concepts and terminology, such as the field of view and the aspect ratio.</p>
      <p class="feature-description">Unlike the Scene, the PerspectiveCamera constructor takes several parameters</p>
      <p class="feature-description">Code</p>
      <p class="feature-description">
        import { PerspectiveCamera } from 'three';
        const fov = 35; // AKA Field of View
        const aspect = container.clientWidth / container.clientHeight;
        const near = 0.1; // the near clipping plane
        const far = 100; // the far clipping plane
        const camera = new PerspectiveCamera(fov, aspect, near, far);
      </p>

      <li>The Renderer</li>
      <p class="feature-description">The primary function of the Renderer in Three.js is to render the scene to the
        screen. It takes the scene (which includes all the objects, lights, cameras, etc.) and computes how it should be
        displayed based on the properties of these objects and the camera's perspective.</p>
      <p class="feature-description">Three.js primarily uses WebGL for rendering. The Renderer manages the WebGL
        context, which is the interface between Three.js and the GPU. It ensures that all the necessary WebGL state
        settings and configurations are correctly set up.</p>
      <p class="feature-description">The constructor for the renderer does take several parameters, however, if we leave
        them out default values will be used.</p>
      <p class="feature-description">Code</p>
      <p class="feature-description">
        import { WebGLRenderer } from 'three';
        const renderer = new WebGLRenderer();
      </p>
      <p class="feature-description">Together, the scene, camera, and renderer give us the basic scaffolding of a
        three.js application. However, none of them can be seen.</p>

      <li>Our First Visible Object: Mesh</li>
      <p class="feature-description">Meshes are the most common kind of visible object used in 3D computer graphics, and
        are used to display all kinds of 3D objects - cats and dogs and humans and trees and buildings and flowers and
        mountains can all be represented using a mesh</p>
      <p class="feature-description">Code</p>
      <p class="feature-description">
        import { Mesh } from 'three';
        const mesh = new Mesh(geometry, material);
      </p>
      <p class="feature-description">The Mesh constructor takes two parameters: a geometry and a material. We will need
        to create both of these before we can create the mesh</p>

      <li>The Geometry</li>
      <p class="feature-description">The geometry defines the shape of the mesh. For this demonstration, we want a box
        shape, so we’ll use a BoxGeometry, which is one of several basic shapes provided in the three.js core.</p>
      <p class="feature-description">Code</p>
      <p class="feature-description">
        import { BoxGeometry } from 'three';
        const length = 2;
        const width = 2;
        const depth = 2;
        const geometry = new BoxGeometry(length, width, depth);
      </p>
      <p class="feature-description">The constructor takes up to six parameters, but here, we provide only the first three,
        which specify the length, width, and depth of the box.</p>

      <li>The Material</li>
      <p class="feature-description">The geometry defines the shape of the mesh. For this demonstration, we want a box
        shape, so we’ll use a BoxGeometry, which is one of several basic shapes provided in the three.js core.</p>
      <p class="feature-description">Code</p>
      <p class="feature-description">
        import { BoxGeometry } from 'three';
        const length = 2;
        const width = 2;
        const depth = 2;
        const geometry = new BoxGeometry(length, width, depth);
      </p>
      <p class="feature-description">The constructor takes up to six parameters, but here, we provide only the first three,
        which specify the length, width, and depth of the box.</p>





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

.subtitle {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
}

.paragraph {
  line-height: 1.5;
  margin-bottom: 15px;
}

.feature-list {
  list-style-type: none;
  padding: 0;
}

.feature-list li {
  font-weight: bold;
  margin-top: 10px;
}

.feature-description {
  margin-bottom: 15px;
}
</style>
