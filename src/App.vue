<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import FooterView from './components/FooterView.vue';
</script>

<template>
  <NavBar
  color="6354A1"/>
  <router-view />
  <FooterView />
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
