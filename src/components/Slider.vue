<template>
    <div class="items5">
      <Splide :options="{ rewind: true,rewindSpeed: 1000, rewindByDrag: true  }" aria-label="Images">
        <SplideSlide>
          <div class="box">
          <img v-if="isWideScreen" :src="img1" alt="Wide Screen Sample 1">
          <img v-else :src="imgv1" alt="Narrow Screen Sample 1">
        </div>
        <div class="text">{{texto1}}</div>
        </SplideSlide>
        <SplideSlide>
          <div class="box">
            <img v-if="isWideScreen" :src="img2" alt="Wide Screen Sample 1">
            <img v-else :src="imgv2" alt="Narrow Screen Sample 1">
           
          </div>
          <div class="text">{{texto2}}</div>
        </SplideSlide>
        <SplideSlide>
          <div class="box">
            <img v-if="isWideScreen" :src="img3" alt="Wide Screen Sample 1">
            <img v-else :src="imgv3" alt="Narrow Screen Sample 1">
            
          </div>  
          <div class="text">{{texto3}}</div>
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
  
 const props = defineProps(['img1', 'img2', 'img3','imgv1', 'imgv2', 'imgv3','texto1', 'texto2', 'texto3'])
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