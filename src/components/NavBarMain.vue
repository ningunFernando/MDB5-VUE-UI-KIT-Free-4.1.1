<template>
    <MDBNavbar expand="lg" light class-navbar="navbar" :position="position" container>
      <!-- Toggle button -->
      <div class="mobile-nav-container">
        <MDBNavbarToggler
          target="#navbarRightAlignExample" :class="Frametextcolor"
          @click="collapse5 = !collapse5"
        ></MDBNavbarToggler>
        <MDBNavbarBrand href="#" class="fa-10x pb-lg-2 pt-lg-2" > 
          <img class="logo-img" src="https://prismatic-blini-62ad83.netlify.app/favicon.png" alt="">
        <div class="logo2"> KU</div> <div class="logo">CHEN</div> 
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
    font-size: 1.5rem;
    font-weight: 800;
}
.logo2{
  margin-left: 1.5rem;
  font-family: v-bind(font_family);
  color: #0F71F2;
  font-weight: 800;
  font-size: 1.5rem;
}

.logo-img{
  width: 4.4dvw;
  margin-left: .8rem;
}

.nav-items{
    font-family: v-bind(font_family);
    font-size: 1.3rem;
    margin-right: 20px;
    


}

.mobile-nav-container{
display: flex;
flex-direction: row-reverse;
gap: 3rem;
}
.navbar{
  background-color: v-bind(color);
}

@media (max-width: 600px){
  .logo-img{
    width: 5rem;
  }
}
</style>