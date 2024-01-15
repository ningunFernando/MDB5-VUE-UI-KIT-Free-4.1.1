<template>
    <div class="items5">
      <Splide :options="{ rewind: true }" aria-label="Images">
        <SplideSlide>
          <img v-if="isWideScreen" src="../assets/sa_1.jpg" alt="Wide Screen Sample 1">
          <img v-else src="../assets/sav_1.jpg" alt="Narrow Screen Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img v-if="isWideScreen" src="../assets/sa_2.jpg" alt="Wide Screen Sample 1">
          <img v-else src="../assets/sav_2.jpg" alt="Narrow Screen Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img v-if="isWideScreen" src="../assets/sa_4.jpg" alt="Wide Screen Sample 1">
          <img v-else src="../assets/sav_4.jpg" alt="Narrow Screen Sample 1">
        </SplideSlide>
      </Splide>
   


  </div>
  </template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
 const isWideScreen = ref(window.innerWidth > 750);

const handleResize = () => {
  isWideScreen.value = window.innerWidth > 750;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
  
 
</script>
<style scoped>

.slider-items{
  height: dvh;
}  
.items5 img{
 
  width: 100%;
  height: auto;
  object-fit:cover;
}

</style>