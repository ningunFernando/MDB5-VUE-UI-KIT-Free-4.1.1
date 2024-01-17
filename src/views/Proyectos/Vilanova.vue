<template>
    <nav-bar-main
    color="#f8f9fa"
    text_color="#000000"
    position="fixed"
    title="KUCHEN"
    font_family="Montserrat"
    />
    <MainWelcomeView
  img="https://prismatic-blini-62ad83.netlify.app/nosotros-2.png"
  title="Vilanova"
  text1="En Kuchen Construcciones somos una empresa dedicada a la edificación de obras bajo el modelo de “llave en mano”. Capaz de planificar, gestionar ejecutar y controlar todos los procesos constructivos requeridos para cada proyecto."
  text2="Somo especialistas en edificación de viviendas bajo el sistema de encofrado con moldes."
  />
  <CardProyectos
  icon="fas fa-home"
  card_title="Casas"
  card_text="Cantidad de viviendas construidas: 186"
  icon2="fas fa-map-marker-alt"
  card_title2="Visión"
  card_text2="Brindar confianza a nuestros clientes, cumpliendo con su necesidades, mejorando su nivel de satisfacción, superando siempre sus expectativas."
  icon3="fas fa-handshake"
  card_title3="Valores"
  title="Filosofia"
  text="En Kuchen nuestro proposito es dar lo mejor a nuestros clientes,
  para ello cumplimos una estricta filosofía."
  card_color="#F2F2F2"
  color="#000000"
  bg_color="#f8f9fa"
  />

  <GridGallery/>

</template>

<script setup lang="ts">
 import NavBarMain from '../../components/NavBarMain.vue';
 import MainWelcomeView from '../../components/MainWelcomeView.vue';
import CardProyectos from '../../components/CardProyectos.vue';
import GridGallery from '../../components/GridGallery.vue';

</script>
<style scoped>

</style>