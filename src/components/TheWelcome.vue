<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Create a simple 3D scene</template>

    After using this tutorial, the learner should be able to create a simple 3D scene using three.js, including adding basic shapes and textures.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Apply basic animations</template>

    At the end of the tutorial, the student should be able to apply basic animations to objects in a three.js scene, such as rotation and scaling.

    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Interacting with 3D objects</template>

    Upon completing the tutorial, the user should be capable of interacting with 3D objects in a three.js environment, understanding how to respond to user input.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Understand the fundamental concepts of 3D graphics</template>

    After using this resource, the student should be able to understand the fundamental concepts of 3D graphics, including how cameras, lights, and materials work in three.js.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Embed a three.js project into a web page</template>
    By the end of the tutorial, the learner should be able to embed a three.js project into a web page, making their 3D creation accessible on the internet.
  </WelcomeItem>
</div>
</template>

<style scoped>

.body {
  padding: 10px;
}


</style>

