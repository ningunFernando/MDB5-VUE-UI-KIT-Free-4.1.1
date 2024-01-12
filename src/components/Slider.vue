
<template>
    <div class="items5">
    <MDBCarousel

      v-model="carousel5"
      :items="items5"
      inner-class="w-100 d-flex justify-content-start "
      captionsClass="carousel-caption h-50 "
      items-class="h-100"

      
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
  } else{
    image = false;
  }
  
  const items5 = [
    {
      src: image ? "src/assets/images/sav_1 - Photo.jpg": "src/assets/images/sa_1 - Photo.jpg",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      },
    {
      src: image ? "src/assets/images/sav_2 - Photo.jpg": "src/assets/images/sa_2 - Photo.jpg",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: image ? "src/assets/images/sav_4 - Photo.jpg": "src/assets/images/sa_3 - Photo.jpg",
      alt: "...",
      label: "Third slide label",
      caption:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
        captionClass: "red"
    }
  ];

  const carousel5 = ref(0);
</script>
<style>

  .items5 {
    

  }
  
</style>