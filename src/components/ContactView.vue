<template>
    <div class="container">
        <h2>Contactanos</h2>
        <form action="https://formsubmit.co/your@email.com" method="POST">
            <input type="text" name="name" required placeholder="Ingrese su nombre">
            <input type="email" name="email" required placeholder="Ingrese su correo">
            <button type="submit">Enviar</button>
       </form>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['background'])
</script>

<style scoped>
.container {
    background-color: v-bind(background);
    width: 100dvw;
    margin: 0 10px 0  0;
}
 form{
    display: flex;
    flex-direction: column;
    width: 30dvw;
    gap: 4rem
}
</style>