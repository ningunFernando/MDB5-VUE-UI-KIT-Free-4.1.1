<template>
    <div class="welcome-container">
        <img :src="img" alt="">
        <div class="welcome-info">
             <h3>{{title}}</h3>
             <p>{{text1}}</p>
             <p>{{text2}}</p>
             <button>Ver nuestros proyectos</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['img', 'title', 'text1', 'text2']);
</script>

<style scoped>

    img{
        width: 30dvw;
    }
    .welcome-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: #f8f9fa;
        gap: 3rem;
        padding: 5rem;
    }
    .welcome-info{
        width: 42dvw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .7rem;
        text-align: justify;
        font-family: Montserrat;
        font-size: 1.15rem;
    }

    .welcome-info h3{
        font-size: 2rem;
    }
    .welcome-info button{
        background: none repeat scroll 0 0 transparent;
        border: medium none;
        border-spacing: 0;
        color: #f8f9fa;
        font-family: Montserrat,sans-serif;
        font-size: 17px;
        font-weight: normal;
        line-height: 2rem;
        list-style: none outside none;
        margin: 0;
        padding: .4rem;
        text-align: center;
        text-decoration: none;
        background-color: #0f71f2;
        width: 15dvw;
        border-radius: 2%;
    }

    @media(max-width: 600px){
        .welcome-container{
            flex-direction: column-reverse;
            padding: 3.2rem;
            gap: 2rem;
        }
        .welcome-info{
            width: 72dvw;
            gap: 1rem;
            font-size: 1.11rem;
        }
        .welcome-container button{
            width: 50dvw;
            font-size: 1rem;
            padding: .1rem;
        }
        img{
            width: 70dvw;
        }
    }
</style>