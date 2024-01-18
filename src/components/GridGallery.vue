<template>
   
</template>

<script setup lang="ts">

</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  background-color: #f8f9fa;
}

.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #03afff;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.grid-item:hover {
  filter: opacity(0.9);
  transform: scale(1.04);
}

.grid-container-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  padding: 20px;
  grid-auto-flow: dense;
}

#img-pro{
  margin-top: 80px;

}

.svg{
  width: 15%;
  height: 15%;
}

.flex-cont{
  margin-top: 50px;
  display: flex;
}

@media (min-width: 600px) {
  .wide {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }
}

</style>