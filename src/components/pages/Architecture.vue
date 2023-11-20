<template>
    <div class="body">
        <h1 class="title">Architecture</h1>
        <p class="paragraph">
            Before we get started, let's take a look at the structure of a Three.js app and understand the components that
            connect together and make the Three.js app
            <img src="@/assets/architecture.png" alt="Three.js App Diagram">
        </p>

        <p>
            Now there are a few things to notice about this diagram:

        <ul>
            <li><strong>Renderer</strong>: The Renderer serves as a central component in three.js, functioning as the
                primary object. It takes a Scene and a Camera as inputs and renders the part of the 3D scene visible within
                the camera's frustum onto a canvas.</li>

            <li><strong>Scenegraph</strong>: The scenegraph is akin to a tree structure, comprising various elements like
                Scene, multiple Mesh objects, Light objects, Group, Object3D, and Camera objects. The Scene object acts as
                the root of the scenegraph, defining properties such as background color and fog. This hierarchical
                structure dictates where objects are positioned and oriented, with children relative to their parent. For
                instance, the wheels of a car might be children of the car, ensuring that moving or orienting the car also
                affects the wheels.</li>

            <li><strong>Camera</strong>: Unlike other objects, a Camera in three.js doesn't have to be part of the
                scenegraph to function. It can exist independently or as a child of another object, allowing it to move and
                orient relative to its parent. There's an example of incorporating multiple Camera objects in a scenegraph
                at the end of the scenegraphs article.</li>

            <li><strong>Mesh</strong>: Mesh objects are responsible for rendering specific Geometry with a designated
                Material. Both Material and Geometry objects can be shared among multiple Mesh objects. For example, drawing
                two blue cubes in different locations might require two Mesh objects for position and orientation, while
                using a single Geometry and Material for both. Both Mesh objects can reference the same Geometry and
                Material objects.</li>

            <li><strong>Geometry</strong>: Geometry objects define the vertex data of various geometries, such as spheres,
                cubes, planes, animals, or buildings. Three.js offers built-in geometry primitives, and custom geometries
                can be created or loaded from files.

            </li>

            <li><strong>Material</strong>: Material objects dictate surface properties for drawing geometry, encompassing
                aspects like color and shininess. Materials may reference one or more Texture objects, allowing, for
                instance, wrapping an image onto a geometry's surface.</li>

            <li><strong>Texture</strong>: Texture objects generally represent images, sourced from image files, generated
                from a canvas, or rendered from another scene.</li>

            <li><strong>Light</strong>: Light objects represent different kinds of lights.</li>
        </ul>
        </p>

        <p>
            I guess it can still be pretty abstract at the moment. I have to draw you a picture to make it more concrete. Ok, I'll use my drawing skills then.
            <img src="@/assets/arch1.png" alt="Three.js App Diagram">

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

.paragraph {
  line-height: 1.5;
  margin-bottom: 15px;
}

li {
  font-weight: bold;
  margin-top: 10px;
  padding-bottom: 20px;
}

.feature-description {
  margin-bottom: 15px;
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
</style>
