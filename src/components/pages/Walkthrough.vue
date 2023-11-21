<template>
    <div class="body">
    <h1 class = "title">Walkthrough</h1>
    <h2>Pre-requisites/Installation for running the demo</h2>
    <ul>
        <li>Install node from <a href = "https://nodejs.org/en/download">here</a></li>
        <li>Go to the project repository</li>
        <li>Run <strong>npm install</strong> which would download all the necessary packages</li>
        <li>After all the packages are installed, run<strong> node app.js</strong> to start the application</li>
        <li>We have used <strong>express server</strong> to run the application on our local</li>
        <li>The application would start running on <strong>http://localhost:3001</strong></li>
    </ul>
    <h2>Demonstration of the code</h2>
    <p> Three.js can be used in standalone html files as well, but in our code demo, we have created a Node.js application. The structure of the project is as follows -</p>
    <img alt="Project Structure" src="/demoStructure.png" width="500" height="500" />
    <br/>
    <h3>Breakdown of the structure:</h3>
    <ul>
        <li>The app.js acts as the entry point of the application</li>
        <li>The views folder consists of the html files where the javascript scripts would be embedded</li>
        <li>The public folder consists of the images, css and javascript files</li>
        <li>The actual code for three.js implementation is written in the client.js files</li>
    </ul>
    <br>
    <h3>app.js</h3>
    <img alt="App.js" src="/demoAppJS.png" width="700" height="700" />
    <p><i>This app.js file helps in rendering pages based on requests</i></p>
    <br>
    <h3>index.html</h3>
    <img alt="index.html" src="/demoIndex.png" width="700" height="700" />
    <p><i>The index.html file provides options to choose from any of the 3 three.js visuals</i></p>
    <br>
    <h3>visual1.html</h3>
    <img alt="visual1.html" src="/demoVisual1.png" width="700" height="700" />
    <p><i>We are importing three.js library from CDN in the script tag as seen in the image above.</i></p>
    <p><i>The visual1.html file acts as a canvas for our first three.js model which is defined in the script client1.js</i></p>
    <br>
    <h3>client1.js</h3>
    <img alt="client1.js" src="/demoClient1.png" width="1200" height="1400" />
    <p>The first three.js visual is a simple 2D clock which involves:</p>
    <ul>
        <li>Creating a scene</li>
        <li>Creating a perspective camera</li>
        <li>Using circle geometry for the clock, box geometries for creating the minute, hour and second hands as well as the 12 markers on the clock</li>
        <li>Using MeshBasicMaterial</li>
        <li>Rendering both scene as well as camera using WebGLRenderer</li>
        <li>Creating a recursive rendering loop with the help of requestAnimationFrame</li>
        <li>Appending the domElement into the document body</li>
    </ul>
    <br>
    <h3>visual2.html</h3>
    <img alt="visual2.html" src="/demoVisual2.png" width="700" height="700" />
    <p><i>We are importing three.js library from CDN in the script tag as seen in the image above.</i></p>
    <p><i>The visual2.html file acts as a canvas for our second three.js model which is defined in the script client2.js</i></p>
    <br>
    <h3>client2.js</h3>
    <img alt="client2.js" src="/demoClient2.1.png" width="1000" height="1000" />
    <img alt="client2.js" src="/demoClient2.2.png" width="1000" height="1000" />
    <p>This three.js visual is a makes use of 4 3d blocks and a spherical ball moving between the blocks. On clicking the document, the movement of ball alternates between horizontal and vertical direction. The direction in which the ball moves, those blocks rotate and the other 2 remain static.</p>
    <p>It also has similar steps:</p>
    <ul>
        <li>Creating a scene</li>
        <li>Creating a perspective camera</li>
        <li>Using 4 boxBufferGeometries for blocks, and one sphereBufferGeometry for the ball</li>
        <li>Using material MeshStandardMaterial</li>
        <li>Rendering both scene as well as camera using WebGLRenderer</li>
        <li>Creating a recursive rendering loop with the help of requestAnimationFrame</li>
        <li>Appending the domElement into the document body</li>
    </ul>
    <br>
    <h3>visual3.html</h3>
    <img alt="visual3.html" src="/demoVisual3.png" width="700" height="700" />
    <p><i>We are importing three.js library from CDN in the script tag as seen in the image above.</i></p>
    <p><i>The visual3.html file acts as a canvas for our third three.js model which is defined in the script client3.js</i></p>

    <br>
    <h3>client3.js</h3>
    <img alt="client3.js" src="/demoClient3.1.png" width="1000" height="1000" />
    <img alt="client3.js" src="/demoClient3.2.png" width="1000" height="1000" />
    <p>This three.js visual is a makes use of complex geometries like TorusBufferGeometry and DodecahedronBufferGeometry along with a sphereBufferGeometry.</p>
    <p>The basic steps for creating a scene, a perspective camera, rendering scene and camera, using animationFrame and appending the domElement are same. </p>
    <p>Here the sphereBufferGeometry is inserted inside the DodecahedronBufferGeometry and the TorusBufferGeometry acts as a ring to it.</p>

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
    img {
        display: block;
        margin-top: 20px;
        max-width: 100%;
        height: auto;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
      }
    strong {
    font-weight: bold;
    }  
</style>
