<script setup lang="ts">
import NavBarMain from './components/NavBarMain.vue';
import FooterView from './components/FooterView.vue';

</script>

<template>
  <div class="hidder">

  </div>
  <router-view />
  <footer-view
  bg_color="#0f71f2"
  />

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>