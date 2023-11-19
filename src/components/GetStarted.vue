<script setup>
import { ref } from 'vue';
import Navbar from './pages/Navbar.vue';
import { useRouter } from 'vue-router';
import Geometries from "@/components/pages/Geometries.vue";

const selectedSection = ref(null);
const selectedSubsection = ref(null);
const router = useRouter();

const selectSection = (section) => {
  section === 'ThreeJs' ? router.push('/architecture') : router.push(section.toLowerCase());
  selectedSection.value = section;
  selectedSubsection.value = null;
};

const displaySubsection = (subsection) => {
  subsection !== 'Buildcube' && router.push(subsection.toLowerCase())
  subsection === 'Buildcube' && router.push('/walkthrough')
  selectedSubsection.value = subsection;
};
</script>

<template>
  <Navbar />
  <div class="content">
    <div class="sidebar">
      <li @click="selectSection('Introduction')">Introduction</li>
      <li @click="selectSection('ThreeJs')">Three.js</li>
      <ul class="subheadings" v-if="selectedSection === 'ThreeJs'">
        <li @click="displaySubsection('Architecture')">Architecture</li>
        <li @click="displaySubsection('Installation')">Get Started</li>
        <li @click="displaySubsection('Fundamentals')">Fundamentals</li>
        <ul class="subheadings"
          v-if="selectedSubsection === 'Fundamentals' || selectedSubsection === 'thescene' 
          || selectedSubsection === 'thecamera'
          || selectedSubsection === 'therenderer'
          || selectedSubsection === 'mesh'
          || selectedSubsection === 'geometries'
          || selectedSubsection === 'materials'
          ">
          <li @click="displaySubsection('thescene')">The Scene</li>
          <li @click="displaySubsection('thecamera')">The Camera</li>
          <li @click="displaySubsection('therenderer')">The Renderer</li>
          <li @click="displaySubsection('mesh')">Mesh</li>
          <li @click="displaySubsection('geometries')">Geometries</li>
          <li @click="displaySubsection('materials')">Materials</li>
        </ul>
        <li @click="displaySubsection('Buildcube')">Building cube with Three.js</li>
        <ul class="subheadings"
          v-if="selectedSubsection === 'Buildcube' || selectedSubsection === 'Walkthrough' || selectedSubsection === 'demovideo'">
          <li @click="displaySubsection('Walkthrough')">Walkthrough</li>
          <li @click="displaySubsection('demovideo')">Demo video</li>
        </ul>
       

      </ul>
    </div>
    <div class="right-content">
      <slot>
      </slot>
    </div>
  </div>
</template>
  
<style scoped>
.content {
  display: flex;
  min-height: 100vh;
}

a {
  display: block;
}

.navbar {
  list-style: none;
  height: 50px;
  display: flex;
  background-color: hsla(160, 100%, 37%, 1);
}

.navbar a {
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 20px;


}

.router-link-exact-active {
  background-color: hsla(160, 100%, 37%, 1);
  ;
  cursor: pointer;
  width: 100%;
  display: block;
}

.content-body {
  padding: 20px;
}

.navbar li {
  margin: 0 10px;
  padding: 10px;
  font-family: "Century Gothic";
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}


.navbar li:hover {
  background-color: #5cad53;
}

.active {
  background-color: #5cad53;
}

.sidebar {
  background-color: #5cad53;
  width: 20%;
  list-style-type: none;
  overflow: auto;
}

.sidebar li {
  color: white;
  padding: 10px;
  padding-left: 40px;
  widows: 100%;
  font-weight: bold;
  list-style-type: none;
}

.subheadings li {
  font-size: 14px;
  padding: 5px;
  font-weight: 500;
}


.sidebar li:hover {
  background-color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
}

.sidebar a {
  color: white;
  font-weight: bold;
  text-align: center;
}

.right-content {
  width: 80%;
}
</style>
  
 
  