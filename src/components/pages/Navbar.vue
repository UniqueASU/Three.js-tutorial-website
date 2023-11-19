<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const activeItem = ref("introduction")
const router = useRouter()

function toggleSection(heading) {
  activeItem.value = heading;
  router.push(`/${heading}`)

}
</script>


<template>
  <nav>
    <ul class="navbar">
      <li :class="{ 'active': activeItem === 'Home' }" @click="toggleSection('')">Home</li>
      <li :class="{ 'active': activeItem === 'introduction' }" @click="toggleSection('introduction')">Introduction</li>
      <li :class="{ 'active': activeItem === 'Our View' }" @click="toggleSection('ourview')">Our View</li>
      <li :class="{ 'active': activeItem === 'References' }" @click="toggleSection('references')">References
      </li>
    </ul>
  </nav>
  <div>
    <slot></slot>
  </div>
</template>
  
<style scoped>
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
</style>
  
 
  