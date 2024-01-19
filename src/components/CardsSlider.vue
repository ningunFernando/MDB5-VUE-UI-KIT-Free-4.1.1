<template>
    
    <div class="container">
        <div class="wrapper">
            <div class="title">
                <h2>Proyectos</h2>
                <p>Algunos de nuestros proyectos son los que se muestran a continuación.
                    donde se demuestra la mejor calidad y dedicacion</p>
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

const info =[
        {
            img:"https://prismatic-blini-62ad83.netlify.app/el-roble.png",
            title:"EL ROBLE",
            text:"Abr, 2016",
            link:"/ElRoble"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/edi-mar-18.jpg",
            title:"MARALTA",
            text:"Feb, 2018",
            link:"/Maralta"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/alberca-vila.jpg",
            title:"VILANOVA",
            text:"May, 2019",
            link:"/Vilanova"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/entrada-iva-2.jpg",
            title:"IVARICA",
            text:"Abr, 2020",
            link:"/Ivarica"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/edificio-cari-2.jpg",
            title:"CARIMA",
            text:"Abr, 2020",
            link:"/Carima"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/portovela.jpg",
            title:"PORTOVELA",
            text:"Abr, 2021",
            link:"/Portovela"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/rafael-render-11.png",
            title:"CONDOMINIO SAN RAFAEL",
            text:"texto de prueba",
            link:"/SanRafael"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/zita-%20(1).jpg",
            title:"ZITADELA",
            text:"Oct, 2022",
            link:"/Zitadela"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/13.jpeg",
            title:"NUESTRAS OFICINAS",
            text:"Sep, 2022",
            link:"/Oficinas"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/d.png",
            title:"San Angel",
            text:"Oct, 2023",
            link:"/sanAngel"
        },
        {
            img:"https://prismatic-blini-62ad83.netlify.app/d.png",
            title:"PROXIMAMENTE",
            text:"2024",
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