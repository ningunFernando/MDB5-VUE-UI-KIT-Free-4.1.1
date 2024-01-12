
  <template>
    <div class="items5">
    <MDBCarousel
      v-model="carousel5"
      :items="items5"
      inner-class="w-100 d-flex justify-content-start"
      captionsClass="carousel-caption h-50 "

      
      
    />
  </div>
  </template>


<script setup lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  const items5 = [
    {
   
      src: "src/assets/images/sa_1 - Photo.jpg",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",

     
     
    },
    {
      src: "src/assets/images/sa_2 - Photo.jpg",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "src/assets/images/sa_3 - Photo.jpg",
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