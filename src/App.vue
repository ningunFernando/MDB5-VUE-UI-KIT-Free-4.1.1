<script setup lang="ts">
import NavBarMain from './components/NavBarMain.vue';
import FooterView from './components/FooterView.vue';
import Slider from './components/Slider.vue';
import CardView from './components/CardView.vue';
</script>

<template>
  <nav-bar-main
  color="#f8f9fa"
  text_color="#000000"
  position="fixed"
  title="KUCHEN"
  font_family="Montserrat"
  />
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