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
    img="https://prismatic-blini-62ad83.netlify.app/el-roble.png"
    title="El Roble"
    text1="Portovela es un desarrollo exclusivo hecho a la medida de las personas más exigentes, aquellas que buscan un hogar, una excelente calidad de vida y una oportunidad de inversión inigualable."
    />
  <CardProyectos
  icon="fas fa-home"
  card_title="Casas"
  card_text="Cantidad de viviendas construidas: 186"
  icon2="fas fa-map-marker-alt"
  card_title2="Ubicación"
  card_text2="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país."
  icon3="fas fa-calendar-alt"
  card_title3="Fechas del proyecto"
  card_list1="Inicio del proyecto: Abril 2016"
  card_list2="Fin del proyecto: Marzo 2018"
  card_color="#F2F2F2"
  color="#000000"
  bg_color="#f8f9fa"
  />

  <div>
    <div id="gallery" class="grid-container-gallery">
        <div
          class="grid-item tall"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-1.jpg')"
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-2.jpg');
          "
        ></div>
  
        <div
          class="grid-item wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-3.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-4.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-5.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-6.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
          background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-10.jpg');

          "
        ></div>
        <div
          class="grid-item"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-12.jpg')"
        ></div>
        <div
          class="grid-item tall wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/el-roble.png');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-11.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-14.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/Sin-titulo-1%20(1).png');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-7.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-9.jpg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ro-img-15.jpg');
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