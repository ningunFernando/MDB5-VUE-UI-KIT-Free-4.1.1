<template>
<div class="d-flex flex-column align-items-center pt-4 pb-5">
    <div class="d-flex flex-column flex-lg-wrap welcome-container text-center">
        <h2>{{title}}</h2>
        <p>{{description}}</p>
        <iframe width="100%" height="540" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" :src="iframe"></iframe>
        <a class="tour-btn text-white mt-5" :href="link">Ver Recorido 3D</a>
    </div>
</div>
</template>

<script setup lang="ts">
const props = defineProps(['title', 'description', 'iframe', 'link','bg_color','btn_color'])
</script>

<style scoped>
*{
    background-color: v-bind(bg_color);
}
.tour-btn{
    text-decoration: none;
    background-color: v-bind(btn_color);
    width: 40dvw;
    text-align: center;
    padding: 10px 2px ;
    box-shadow: 3px 2px 4px rgb(44, 44, 44);
}

.welcome-container{
    justify-content:center; ;
    align-items: center;
    width: 70dvw;
}

.welcome-container p{
    text-align: justify;
}
</style>