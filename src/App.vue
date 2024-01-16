<script setup lang="ts">
import NavBarMain from './components/NavBarMain.vue';
import FooterView from './components/FooterView.vue';
import Slider from './components/Slider.vue';
</script>

<template>
  <nav-bar-main
  color="#F8F9FA"
  text_color="#000000"
  position="top"
  title="KUCHEN"
  font_family="Montserrat"
  />
  <router-view />
  <Slider
  img1="https://prismatic-blini-62ad83.netlify.app/vilanova-2.jpeg"
  img2="https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg"
  img3="https://prismatic-blini-62ad83.netlify.app/casa-iva-3.jpg"
  imgv1="https://prismatic-blini-62ad83.netlify.app/vilanova-2.jpeg"
  imgv2="https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg"
  imgv3="https://prismatic-blini-62ad83.netlify.app/casa-iva-3.jpg"
  texto1="hola1"
  texto2="hola2"
  texto3="hola3"
  />
  <footer-view
  color="#212529"
  />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>