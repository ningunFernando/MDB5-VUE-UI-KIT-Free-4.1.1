<template>
  <NavBar
  font_family=" Nova Mono"
  text_color="#FAFBED"
  Frametextcolor="text-white"
  color="#60713a"
  />
  <Slider/>
  <WelcomeView/>
  <UtilitiesView
    color="#60713a"
    title="Conoce nuestra ubicacion"
    description="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país."
    iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.860671597177!2d-105.28768082469017!3d20.732843895715636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146e1b2098eb9%3A0x2d550fa0c1bcee86!2sAgave%20Azul%20%26%20Callej%C3%B3n%20A%20la%20Laguna%2C%20Ni%C3%B1os%20H%C3%A9roes%2C%2063735%20Mezcales%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1705111491455!5m2!1ses-419!2smx"
    apartment_photo="https://silly-sopapillas-764d9e.netlify.app/assets/sa_2.5416a1c2.jpg"
    icon="fa fa-home"
    icon_info="esta es una prueba con props"
    icon2="fa fa-camera"
    icon_info2="esta es una prueba con props"
    icon3="fa fa-home"
    icon_info3="esta es una prueba con props"
    icon4="fa fa-camera"
    icon_info4="hola"
  />
  <ModelsTab/>
  <FooterView/>
</template>

<script setup lang="ts">
  import Slider from '../components/Slider.vue';
  import WelcomeView from '../components/WelcomeView.vue';
  import UtilitiesView from '../components/UtilitiesView.vue';
  import ModelsTab from '../components/ModelsTab.vue';
  import NavBar from '../components/NavBar.vue';
  import FooterView from '../components/FooterView.vue';
  
</script>

<style scoped>

</style>