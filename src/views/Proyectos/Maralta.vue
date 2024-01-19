<template>
    <nav-bar-main
    color="#f8f9fa"
    text_color="#000000"
    position="fixed"
    title="KUCHEN"
    font_family="Montserrat"
    />
    <div class="m-5"></div>
    <ProyectWelcomeView
    img="https://prismatic-blini-62ad83.netlify.app/maralta.png"
    title="Fraccionamiento Maralta"
    text1="Maralta cuenta con 352 viviendas verticales, las cuales están contenidas en 22 condominios de 4 niveles, de 16 departamentos cada uno y 58 viviendas unifamilires. 
    Un entorno completo con amplios espacios de esparcimiento para todas las edades. Incluyendo una ciudad infantil para los más pequeños."
    />
  <CardProyectos
  icon="fas fa-home"
  card_title="Casas"
  card_text="Cantidad de viviendas construidas: vertical 352 y unifamilar 58"
  icon2="fas fa-map-marker-alt"
  card_title2="Ubicación"
  card_text2="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país."
  icon3="fas fa-calendar-alt"
  card_title3="Fechas del proyecto"
  card_list1="Inicio del proyecto: Febrero 2018"
  card_list2="Fin del proyecto: Diciembre 2019"
  card_color="#F2F2F2"
  color="#000000"
  bg_color="#f8f9fa"
  />

  <div>
    <div id="gallery" class="grid-container-gallery">
        <div
          class="grid-item tall"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-1.jpg')"
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-2.jpg');
          "
        ></div>
  
        <div
          class="grid-item wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-3.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-4.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-5.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-6.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-7.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-8.jpg')"
        ></div>
        <div
          class="grid-item tall wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/maralta.png');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-9.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-10.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-11.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-12.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-16.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/edi-mar-17.jpg');
          "
        ></div>
      </div>
</div>

</template>

<script setup lang="ts">
 import NavBarMain from '../../components/NavBarMain.vue';
 import ProyectWelcomeView from '../../components/ProyectWelcomeView.vue';
import CardProyectos from '../../components/CardProyectos.vue';
import GridGallery from '../../components/GridGallery.vue';

</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  background-color: #f8f9fa;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #03afff;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-item:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-container-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  padding: 20px;
  grid-auto-flow: dense;
}

#img-pro{
  margin-top: 80px;

}

.svg{
  width: 15%;
  height: 15%;
}

.flex-cont{
  margin-top: 50px;
  display: flex;
}

@media (min-width: 600px) {
  .wide {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }
}
</style>