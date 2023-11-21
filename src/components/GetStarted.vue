<script setup>
import { ref } from 'vue';
import Navbar from './pages/Navbar.vue';
import { useRouter } from 'vue-router';
import Geometries from "@/components/pages/Geometries.vue";

const selectedSection = ref(null);
const selectedSubsection = ref(null);
const activeItem = ref("introduction")
const router = useRouter();

const selectSection = (section) => {
  section === 'ThreeJs' ? router.push('/architecture') : router.push(section.toLowerCase());
  selectedSection.value = section;
  selectedSubsection.value = null;
  activeItem.value = section;

};

const displaySubsection = (subsection) => {
  subsection !== 'Buildcube' && router.push(subsection.toLowerCase())
  subsection === 'Buildcube' && router.push('/walkthrough')
  subsection === 'Fundamentals' && router.push('/thescene')
  selectedSubsection.value = subsection;
  activeItem.value = subsection;

};
</script>

<template>
  <Navbar />
  <div class="content">
    <div class="sidebar">
      <li :class="{ 'active': activeItem === 'Introduction' }" @click="selectSection('Introduction')">Introduction</li>
      <li @click="selectSection('ThreeJs')">Three.js</li>
      <ul class="subheadings" v-if="selectedSection === 'ThreeJs'">
        <li :class="{ 'active': activeItem === 'Architecture' || activeItem === 'ThreeJs' }" @click="displaySubsection('Architecture')">Architecture</li>
        <li :class="{ 'active': activeItem === 'Installation' }" @click="displaySubsection('Installation')">Get Started</li>
        <li :class="{ 'active': activeItem === 'Fundamentals' }" @click="displaySubsection('Fundamentals')">Fundamentals</li>
        <ul class="subheadings"
          v-if="selectedSubsection === 'Fundamentals' || selectedSubsection === 'thescene' 
          || selectedSubsection === 'thecamera'
          || selectedSubsection === 'therenderer'
          || selectedSubsection === 'mesh'
          || selectedSubsection === 'geometries'
          || selectedSubsection === 'materials'
          ">
          <li :class="{ 'active': activeItem === 'thescene' || activeItem=== 'Fundamentals' }" @click="displaySubsection('thescene')">The Scene</li>
          <li :class="{ 'active': activeItem === 'thecamera' }" @click="displaySubsection('thecamera')">The Camera</li>
          <li :class="{ 'active': activeItem === 'therenderer' }" @click="displaySubsection('therenderer')">The Renderer</li>
          <li :class="{ 'active': activeItem === 'mesh' }" @click="displaySubsection('mesh')">Mesh</li>
          <li :class="{ 'active': activeItem === 'geometries' }" @click="displaySubsection('geometries')">Geometries</li>
          <li :class="{ 'active': activeItem === 'materials' }" @click="displaySubsection('materials')">Materials</li>
        </ul>
        <li @click="displaySubsection('Buildcube')">Building an App with Three.js</li>
        <ul class="subheadings"
          v-if="selectedSubsection === 'Buildcube' || selectedSubsection === 'Walkthrough' || selectedSubsection === 'demovideo'">
          <li :class="{ 'active': activeItem === 'Walkthrough' || activeItem === 'Buildcube' }" @click="displaySubsection('Walkthrough')">Walkthrough</li>
          <li :class="{ 'active': activeItem === 'demovideo' }" @click="displaySubsection('demovideo')">Demo video</li>
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
.active {
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

.active {
  background-color: hsla(160, 100%, 37%, 1);
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
  
 
  