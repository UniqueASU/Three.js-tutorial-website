<template>
  <div class="body">
    <h1 class="title">The Camera</h1>

    <section class="introduction">
      <p>The Camera is like a Telescope pointed at the Scene. To view the scene, we need to open a window into this realm and convert into something that makes sense to our human eyes, and that’s where the camera comes in. There are several ways to convert the scene graphic into a human vision friendly format, using techniques called projections.</p>
    </section>

    <p class="feature-description">The Camera is like a Telescope pointed at the Scene</p>
    <p class="feature-description">To view the scene, we need to open a window into this realm and convert into
      something that makes sense to our human eyes, and that’s where the camera comes in.</p>
    <p class="feature-description">There are several ways to convert the scene graphic into a human vision friendly
      format, using techniques called projections.</p>

    <ol>
      <li><strong>Perspective Projection</strong></li>
      <ul>
        <li><strong>Concept:</strong> This is the most common type of projection used in 3D graphics. It mimics how the human eye
          perceives the world, with objects appearing smaller as they are farther away, creating a sense of depth.</li>
        <li><strong>Usage:</strong> This camera is used in most scenarios, especially in games, simulations, and any application where
          a realistic representation is needed.</li>
        <li><strong>Key Properties:</strong></li>
        <ul>
          <li>Field of View (FOV): This determines the extent of the scene that is seen on the display at any given
            moment. A larger FOV allows you to see more of the scene.</li>
          <li>Aspect Ratio: Typically determined by the width divided by the height of the canvas or the element
            where the scene is rendered.</li>
          <li>Near and Far Clipping Planes: These define the distances relative to the camera where objects will
            start and stop being rendered. Objects closer than the near plane or farther than the far plane won't
            be rendered.</li>
        </ul>
        <li>Example: Creating a perspective camera with a 75-degree field of view, aspect ratio based on the window
          size, and near and far clipping planes of 0.1 and 1000 units, respectively:</li>
        <div class="code-snippet">
          <code>const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);</code>
        </div>
      </ul>
      <li><strong>Orthographic Projection</strong></li>
        <ul>
          <li><strong>Concept:</strong> In orthographic projection, the size of objects is constant regardless of distance from the camera.
            This means there's no perspective distortion, making parallel lines appear parallel, not converging..</li>
          <li><strong>Usage:</strong> This camera is useful for 2D games, architectural visualization, engineering applications, and any
            situation where accurate measurements or undistorted views are needed</li>
          <li><strong>Key Properties:</strong></li>
          <ul>
            <li>Left, Right, Top, Bottom: These define the dimensions of the camera’s view. They set the boundaries of
              the area that will be rendered.</li>
          <li>Near and Far Clipping Planes: Similar to the perspective camera, they define the visible range of the scene.</li>
        </ul>
        <li>Creating an orthographic camera where the view extends from -5 to 5 units horizontally, 3 to -3 units
          vertically, with near and far clipping planes:</li>
          <div class="code-snippet">
            <code>const camera = new THREE.OrthographicCamera(-5, 5, 3, -3, 0.1, 100);</code>
          </div>
      </ul>
    </ol>

    <br>

    <h2>Choosing the Right Camera</h2>
    <ul>
      <li><strong>Perspective vs. Orthographic:</strong> The choice between these two types of cameras depends on the requirements of your
        application. For realistic 3D effects, perspective projection is the way to go. For technical or 2D applications,
        orthographic projection is more suitable.</li>
      <li><strong>Adjusting Parameters:</strong> Both camera types offer various parameters to adjust the view. Experimenting with these
        parameters can help you achieve the desired effect for your scene.
      </li>
      <li><strong>Combining Cameras:</strong> In some advanced cases, both types of cameras can be used in the same application, switching
        between them as needed.
      </li>
    </ul>

    <br>

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

strong {
  font-weight: bold;
}


.feature-description {
  margin-bottom: 15px;
}
</style>
