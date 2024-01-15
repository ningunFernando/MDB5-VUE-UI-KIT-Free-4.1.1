<template>
    <div class="items5">
    <MDBCarousel

      v-model="carousel5"
      :items="items5"
      inner-class="w-100 d-flex justify-content-start h-100"
      captionsClass="carousel-caption h-75 display-6"
      items-class="slider-items fa w-100"
      />
  </div>
  </template>


<script setup lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  let responsive = screen.width;
  let image;
  if (responsive > 750)
  {
    image = true;
  }else{
    image = false;
  }


  
  const items5 = [
    {
      src: image?"src/assets/sa_1.jpg":"src/assets/sav_1.jpg",
      alt: "la vida no tiene esperanza si esta galeria no funiona me voy a matar",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      },
    {
      src: image?  "src/assets/sa_2.jpg":"src/assets/sav_2.jpg",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src:image?"src/assets/sa_4.jpg":"src/assets/sav_4.jpg",
      alt: "hola",
      label: "Third slide label",
      caption:"Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    }
  ];

  const carousel5 = ref(0);
</script>
<style scoped>

.slider-items{
  height: dvh;
}  
</style>