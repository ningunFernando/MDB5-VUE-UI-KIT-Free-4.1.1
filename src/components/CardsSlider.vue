<template>
    
    <div class="container">
        <div class="wrapper">
            <div class="title">
                <h2>Proyectos</h2>
                <p>Algunos de nuestros proyectos son los que se muestran a continuación.
                    donde se demuestra la mejor calidad y dedicacion</p>
            </div>
            <div class="slider">
                <Splide :options="{ rewind: true, perPage:3, breakpoints:{
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

const info =[
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Vilanova",
            text:"texto de prueba",
            link:"/vilanova"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"aaaaaaaaaaaaaaaa",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"Portavela",
            text:"texto de prueba",
            link:"a"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/casas%20portovela.jpg",
            title:"aaaaaaaaaaaaaaaa",
            text:"texto de prueba",
            link:"a"
        }

    ]
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 5rem 0;
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