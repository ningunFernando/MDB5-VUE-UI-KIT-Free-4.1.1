<template>
    <MDBNavbar expand="lg" light style="background-color: #60713a" position="fixed" container>
      <!-- Toggle button -->
      <div class="mobile-nav-container">
        <MDBNavbarToggler
          target="#navbarRightAlignExample" class="text-white"
          @click="collapse5 = !collapse5"
        ></MDBNavbarToggler>
        <MDBNavbarBrand href="#" class="logo f  pb-lg-2 pt-lg-2" >San Angel</MDBNavbarBrand>
      </div>
      <!-- Collapsible wrapper -->
      <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
        <MDBNavbarNav right class=" pb-lg-2 pt-lg-2 text-white">
          <!-- Right links -->
          <MDBNavbarItem class="nav-items" to="#">
           <div class="text-white"> Home</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" href="#">
            <div class="text-white"  >Link</div>
          </MDBNavbarItem>
          <!-- Right links -->
        </MDBNavbarNav>
      </MDBCollapse>
      <!-- Collapsible wrapper -->
    </MDBNavbar>
  </template>

  <script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  const collapse5 = ref(false);
  const dropdown8 = ref(false);
</script>

<style scoped>
.logo{
    font-family: Nova Mono;
    color: #FAFBED;
    font-size: 2rem;
    margin-left: 30px;
}

.nav-items{
    font-family: Nova Mono;
    font-size: 1.3rem;
    margin-right: 20px;
}

.mobile-nav-container{
display: flex;
flex-direction: row-reverse;
gap: 5rem;
}

</style>