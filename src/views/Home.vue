<template>
  <nav-bar-main
  color="#f8f9fa"
  text_color="#000000"
  position="fixed"
  title="KUCHEN"
  font_family="Montserrat"
  />
  <Slider
  img1="https://prismatic-blini-62ad83.netlify.app/rafael-render-11.png"
  img2="https://prismatic-blini-62ad83.netlify.app/sa_1.jpg"
  img3="https://prismatic-blini-62ad83.netlify.app/rafael-render-12.jpeg  "
  imgv1="https://prismatic-blini-62ad83.netlify.app/rafael-render-11.png"
  imgv2="https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg"
  imgv3="https://prismatic-blini-62ad83.netlify.app/casa-iva-3.jpg"
  texto1="¡Bienvenido!"
  texto2=""
  texto3=""
  />
  <MainWelcomeView
  img="https://prismatic-blini-62ad83.netlify.app/nosotros-2.png"
  title="Sobre Nosotros"
  text1="En Kuchen Construcciones somos una empresa dedicada a la edificación de obras bajo el modelo de “llave en mano”. Capaz de planificar, gestionar ejecutar y controlar todos los procesos constructivos requeridos para cada proyecto."
  text2="Somo especialistas en edificación de viviendas bajo el sistema de encofrado con moldes."
  />

  <WelcomeCards
  icon="fas fa-home"
  card_title="Misión"
  card_text="Ejecutar proyectos de construcción, con altos estándares de calidad y control, que permiten forjar relaciones de confianza con el cliente."
  icon2="fas fa-book-open"
  card_title2="Visión"
  card_text2="Brindar confianza a nuestros clientes, cumpliendo con su necesidades, mejorando su nivel de satisfacción, superando siempre sus expectativas."
  icon3="fas fa-handshake"
  card_title3="Valores"
  title="Filosofia"
  text="En Kuchen nuestro proposito es dar lo mejor a nuestros clientes,
  para ello cumplimos una estricta filosofía."
  card_color="#212529"
  color="#f9fff9"
  bg_color="#f8f9fa"
  />

<CardsSlider
  title="Proyectos"
  text="Proyectos en los que Kuchen construcciones a participado en el sector de edificacion"
/>

<CardsSliderProyects
  title="Desarollos"
  text="Descubre todos nuestros proyectos excluisivos de Kuchen Construcciones en Bahia de banderas, donde veras descripciones, avances de obra y mucho mas"
/>

<ContactView
  ButtonColor="#0f71f2"
  ButtonHover="#0f99f2"
/>

</template>

<script setup lang="ts">
import NavBarMain from '../components/NavBarMain.vue';
import Slider from '../components/Slider.vue';
import MainWelcomeView from '../components/MainWelcomeView.vue';
import WelcomeCards from '../components/WelcomeCards.vue';
import CardsSlider from '../components/CardsSlider.vue';
import ContactView from '../components/ContactView.vue';
import CardsSliderProyects from '../components/CardsSliderProyects.vue';
</script>

<style scoped>

</style>