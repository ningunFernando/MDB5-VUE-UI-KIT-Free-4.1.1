<template>
    <MDBNavbar expand="lg" light class-navbar="navbar" :position="position" container>
      <!-- Toggle button -->
      <div class="mobile-nav-container">
        <MDBNavbarToggler
          target="#navbarRightAlignExample" :class="Frametextcolor"
          @click="collapse5 = !collapse5"
        ></MDBNavbarToggler>
        <MDBNavbarBrand href="#" class="logo f  pb-lg-3 pt-lg-3" >San Angel</MDBNavbarBrand>
      </div>
      <!-- Collapsible wrapper -->
      <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
        <MDBNavbarNav right class=" pb-lg-3 pt-lg-3 text-white">
          <!-- Right links -->
          <MDBNavbarItem class="nav-items" to="/sanAngel">
           <div class="text-white"> Home</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" to="/">
            <div class="text-white"  >Kuchen  </div>
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


  const props = defineProps(['font_family', 'font_size','color', 'Frametextcolor', 'text_color','position'])
</script>

<style scoped>
.logo{
    font-family: v-bind(font_family);
    color: v-bind(text_color);
    font-size: 2rem;
    margin-left: 30px;
}

.nav-items{
    font-family: v-bind(font_family);
    font-size: 1.3rem;
    margin-right: 20px;
}

.mobile-nav-container{
display: flex;
flex-direction: row-reverse;
gap: 5rem;
}
.navbar{
  background-color: v-bind(color);
}
</style>