<template>
  <Slider/>
  <WelcomeView/>
  <UtilitiesView
  title="Conoce nuestra ubicacion"
  description="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país."/>

  <ModelsTab/>
</template>

<script setup lang="ts">
  import Slider from '../components/Slider.vue';
  import WelcomeView from '../components/WelcomeView.vue';
  import UtilitiesView from '../components/UtilitiesView.vue';
  import ModelsTab from '../components/ModelsTab.vue';
  
</script>

<style scoped>

</style>