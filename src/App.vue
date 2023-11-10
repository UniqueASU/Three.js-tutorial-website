<script setup lang="ts">
</script>

<template>
  <component :is="$route?.meta?.layout || 'div'">
    <router-view :key="$route.fullPath" />
  </component>
</template>
