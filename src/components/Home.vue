<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheWelcome from './TheWelcome.vue';
import HomeTitle from './HomeTitle.vue';
</script>

<template>
  <div class="home-body">
  <header class="heading">
    <img alt="Vue logo" class="logo" src="@/assets/threeJSlogo.svg" width="125" height="125" />

    <div class="wrapper">
      <HomeTitle msg="Three.js" />

      <nav class="getstarted">
        <router-link to="/introduction">Get started</router-link>
      </nav>
    </div>
  </header>
  <div class="outcomes">
    <h1 class="outcome-heading">What to achieve?</h1>
    <TheWelcome/>
  </div>
</div>
</template>

<style scoped>

.getstarted {
  font-size: 18px;
  font-weight: bold;
}
.heading {
    width:70%;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.outcome-heading{
    margin-bottom: 25px;
}

.outcomes {
  width: 100%;

}

.home-body {
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
