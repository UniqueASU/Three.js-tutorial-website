<template>
    <div class="body">
        <h1 class="title">Introduction to Three.js</h1>
        <p class="paragraph">
            In the ever-evolving landscape of web development, the demand for immersive and engaging user experiences
            continues to rise. Enter Three.js – an open-source JavaScript library that empowers developers to create
            stunning 3D graphics and animations directly in the browser.
        </p>

        <p class="paragraph">
            Three.js makes 3D programming accessible to web developers, allowing them to harness the power of WebGL
            effortlessly. WebGL, a web standard for rendering 3D graphics, can be complex to work with directly. Three.js
            abstracts away much of this complexity, providing a high-level API that simplifies the creation of 3D scenes,
            animations, and interactive content.
        </p>

        <h2 class="subtitle">History</h2>
        <p class="paragraph">
            Three.js was created by Ricardo Cabello, also known as "Mr.doob," in 2010. The project started as an experiment to explore the capabilities of WebGL, a web standard for rendering 
            3D graphics in browsers without the need for plugins. The library gained popularity quickly due to its simplicity and powerful features. Its early versions focused on providing a straightforward API for creating and manipulating 3D scenes, making it 
            accessible to developers with varying levels of expertise. The open-source nature of Three.js encouraged contributions from the community. Numerous extensions, plugins, and tutorials were developed, further enriching the ecosystem and helping developers explore new possibilities.
            The library stays relevant by adapting to emerging web technologies and addressing the evolving needs of the 3D web development community.
        </p>

        <h2 class="subtitle">Key Features of Three.js</h2>
        <ul class="feature-list">
            <li>Cross-Browser Compatibility:</li>
            <p class="feature-description">Three.js takes care of the nuances of WebGL implementation across different
                browsers, ensuring a consistent 3D experience for users on various platforms.</p>

            <li>Abstraction of WebGL Complexity:</li>
            <p class="feature-description">Rather than delving into the low-level intricacies of WebGL, developers can
                leverage Three.js to work with a more intuitive and straightforward API. This abstraction streamlines the
                creation of 3D content, making it accessible to a broader audience.</p>

            <li>Rich Set of Tools and Utilities:</li>
            <p class="feature-description">Three.js comes equipped with a robust set of tools, including cameras, lights,
                geometries, and materials. This comprehensive toolkit empowers developers to craft diverse 3D scenes with
                ease.</p>
        </ul>

        <p class="paragraph">
            As we embark on this Three.js tutorial journey, you'll discover how to build captivating 3D visuals, create
            interactive environments, and unleash the full potential of web-based 3D development. Let's dive into the
            world of Three.js and unlock the possibilities of bringing three-dimensional magic to the web!
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
