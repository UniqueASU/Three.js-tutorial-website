<template>
     <h1>Demo video</h1>
    <div class="main-content">
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/lhPecZzM_M4'"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </template>

  <style scoped>
  .main-content {
    padding: 40px 30px;
    margin: 0px 20px;
  }

  h1 {
    padding: 20px 30px;
  }

</style>
  