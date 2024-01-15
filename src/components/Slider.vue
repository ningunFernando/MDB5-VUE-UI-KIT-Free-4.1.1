<template>
    <div class="items5">
      <Splide :options="{ rewind: true,rewindSpeed: 1000, rewindByDrag: true  }" aria-label="Images">
        <SplideSlide>
          <div class="box">
          <img v-if="isWideScreen" src="../assets/sa_1.jpg" alt="Wide Screen Sample 1">
          <img v-else src="../assets/sav_1.jpg" alt="Narrow Screen Sample 1">
        </div>
        <div class="text">Este es un texto muestra</div>
        </SplideSlide>
        <SplideSlide>
          <div class="box">
            <img v-if="isWideScreen" src="../assets/sa_2.jpg" alt="Wide Screen Sample 1">
            <img v-else src="../assets/sav_2.jpg" alt="Narrow Screen Sample 1">
           
          </div>
          <div class="text">Este es un texto muestra</div>
        </SplideSlide>
        <SplideSlide>
          <div class="box">
            <img v-if="isWideScreen" src="../assets/sa_4.jpg" alt="Wide Screen Sample 1">
            <img v-else src="../assets/sav_4.jpg" alt="Narrow Screen Sample 1">
            
          </div>
          <div class="text">Este es un texto muestra</div>
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
.box{
  position: relative;
  display: inline-block;
  text-align: center;
  filter:brightness(0.5);
}


.text{
  position: absolute;
  font-size: 10vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 color: rgb(255, 255, 255);

  text-align: center;
  filter:brightness(1);
}


</style>