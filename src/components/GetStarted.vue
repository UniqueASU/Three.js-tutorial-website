<script setup>
import Navbar from './pages/Navbar.vue';
</script>


<template>
 <Navbar/>
  <div class="content">
    <div class="sidebar">
      <router-link to="/introduction">Introduction</router-link>
      <router-link to="/threejs">Three JS</router-link>
    </div>
    <div  class="right-content" >
      <slot>
      </slot>
    </div>
  </div>
</template>
  
<style scoped>
.content {
  display: flex;
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
   background-color: hsla(160, 100%, 37%, 1);;
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
  height: 100vh;
  list-style-type: none;
}

.sidebar li {
  color: white;
  padding: 20px;
  widows: 100%;
  font-weight: bold;
}

.sidebar li:hover {
  background-color: hsla(160, 100%, 37%, 1);
  cursor: pointer;
}

.sidebar a {
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 20px;

}
</style>
  
 
  