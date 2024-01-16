<template>
    <MDBNavbar expand="lg" light class-navbar="navbar" :position="position" container>
      <!-- Toggle button -->
      <div class="mobile-nav-container">
        <MDBNavbarToggler
          target="#navbarRightAlignExample" :class="Frametextcolor"
          @click="collapse5 = !collapse5"
        ></MDBNavbarToggler>
        <MDBNavbarBrand href="#" class="logo f  pb-lg-2 pt-lg-2" > 
        <div class="logo2"> KU</div> <div>CHEN</div> 
        </MDBNavbarBrand>
      </div>
      <!-- Collapsible wrapper -->
      <MDBCollapse v-model="collapse5" id="navbarRightAlignExample">
        <MDBNavbarNav right class=" pb-lg-2 pt-lg-2 text-black">
          <!-- Right links -->
          <MDBNavbarItem class="nav-items" to="/san_angel">
           <div class="text-black"> Home</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" href="#">
            <div class="text-black"  >Nosotros</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" href="#">
            <div class="text-black"  >Filosofia</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" href="#">
            <div class="text-black"  >Proyectos</div>
          </MDBNavbarItem>
          <MDBNavbarItem class="nav-items" href="#">
            <div class="text-black"  >Contacto</div>
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
    font-size: 2rem;
    margin-left: 30px;

}
.logo2{
  color: #0F71F2;
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
  background-color: #F8F9FA;


}
</style>