<template>
    <MDBNavbar expand="lg" light bg="light" container>
      <MDBNavbarBrand href="#">Brand</MDBNavbarBrand>
      <MDBNavbarToggler
        @click="collapse1 = !collapse1"
        target="#navbarSupportedContent"
      ></MDBNavbarToggler>
      <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
        <MDBNavbarNav class="mb-2 mb-lg-0">
          <MDBNavbarItem to="#" active>
            Home
          </MDBNavbarItem>
          <MDBNavbarItem href="#">
            Link
          </MDBNavbarItem>
        </MDBNavbarNav>
        <!-- Search form -->
      </MDBCollapse>
    </MDBNavbar>
  </template>

  <script setup lang="ts">
  import {
    MDBBtn,
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

  const collapse1 = ref(false);
  const dropdown1 = ref(false);
</script>

<style scoped>

</style>