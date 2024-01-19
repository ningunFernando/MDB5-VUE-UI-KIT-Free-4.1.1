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
    img="https://prismatic-blini-62ad83.netlify.app/ofi-13.png"
    title="Nuestras Oficinas"
    text1="Nuestras oficinas estan diseñadas para un gran ambiente laboral y profesional donde podra ser atendido"
    />
  <CardProyectos
  icon="fas fa-home"
  card_title="Casas"
  card_text="Oficia de 3 pisos"
  icon2="fas fa-map-marker-alt"
  card_title2="Ubicación"
  card_text2="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país."
  icon3="fas fa-calendar-alt"
  card_title3="Fechas del proyecto"
  card_list1="Inicio del proyecto: Octubre 2022"
  card_list2="Fin del proyecto: En desarrollo"
  card_color="#F2F2F2"
  color="#000000"
  bg_color="#f8f9fa"
  />

  <div>
    <div id="gallery" class="grid-container-gallery">
        <div
          class="grid-item tall"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-4.jpeg')"
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-1.jpeg');
          "
        ></div>
  
        <div
          class="grid-item wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-2.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-3.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-5.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-6.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-7.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-8.jpeg')"
        ></div>
        <div
          class="grid-item tall wide"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-13.png');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-9.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-10.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-11.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-12.jpeg');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-13.png');
          "
        ></div>
        <div
          class="grid-item"
          style="
            background-image: url('https://prismatic-blini-62ad83.netlify.app/ofi-2.jpeg');
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