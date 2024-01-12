
  <template>
    <div class="items5">
    <MDBCarousel
      v-model="carousel5"
      :items="items5"
      inner-class=" w-100 "
      captionsClass="carousel-caption w-100"
      items-class="w-100 "
      
      dark
    />
  </div>
  </template>


<script setup lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  const items5 = [
    {
   
      src: "src/assets/fachada dia con logo.jpg",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
     
     
    },
    {
      src: "src/assets/TERRAZA ASADOR. LOGO.jpg",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "src/assets/VISTA MURO INTERIOR.jpg",
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
  .items5{
    width: 100%;
    height: 85dvh;
  
  }

</style>