<template>
    <div class="welcome-container">
        <img :src="img" alt="">
        <div class="welcome-info">
             <h3>{{title}}</h3>
             <p>{{text1}}</p>
             <p>{{text2}}</p>
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
        padding: 8rem 9rem 3rem 9rem;
    }
    .welcome-container img{
        background-color: black;
        width: 50dvw;
        border-radius: 15px;
    }
    .welcome-info{
        width: 38dvw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .7rem;
        text-align: justify;
        font-family: Montserrat;
        font-size: 1.15rem;
        color: black;
    }

    .welcome-info h3{
        font-size: 3rem;
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