<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import FooterView from './components/FooterView.vue';
</script>

<template>
  <NavBar/>
  <router-view />
  <FooterView />
</template>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}
</style>
