<template>
    
    <div class="container">
        <div class="wrapper">
            <div class="title">
                <h2 class="">{{title}}</h2>
                <p class="w-50 text-center">{{text}}</p>
            </div>
            <div class="slider">
                <Splide :options="{ rewind: true, perPage:3, 
                    breakpoints:{
                    600:{
                        perPage:1,
                        arrows:false,
                    }
                } }" aria-label="My Favorite Images">
                    <SplideSlide v-for="(value, i) in info"  v-bind:key="i">
                        <CardView
                        :data = value />
                    </SplideSlide>
                  </Splide>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import CardView from './CardView.vue';

const props = defineProps(['title', 'text']);

const info =[
        {
            img:"https://prismatic-blini-62ad83.netlify.app/rafael-render-11.png",
            title:"CONDOMINIO SAN RAFAEL",
            text:"texto de prueba",
            link:"/SanRafael"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/13.jpeg",
            title:"NUESTRAS OFICINAS",
            text:"Sep, 2022",
            link:"/Oficinas"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/sa_1.jpg",
            title:"San Angel",
            text:"Oct, 2023",
            link:"/sanAngel"
        },
    ]
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 5rem .1rem;
}
.container{
    width: 100dvw;
}

.title{
    width: 80dvw;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: justify;
    
}
.slider {
    padding: 2rem 0rem;
}

</style>