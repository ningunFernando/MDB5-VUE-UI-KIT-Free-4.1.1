<template>
    <MDBFooter :text="['center', 'lg-start']">
      <!-- Copyright -->
      <div class="text-center p-3 d-flex flex-lg-row justify-content-center footer">
         <div class="text-white">© 2024 Copyright: </div> 
        <a class="text-white" href="https://www.kuchenconstrucciones.com/">Kuchen Construcciones</a>
      </div>
      <!-- Copyright -->
    </MDBFooter>
  </template>

  <script setup lang="ts">
  import { MDBFooter } from 'mdb-vue-ui-kit';

  const props = defineProps(['bg_color'])
</script>

<style scoped>
    .footer {
      background-color: v-bind(bg_color);
    }
</style>