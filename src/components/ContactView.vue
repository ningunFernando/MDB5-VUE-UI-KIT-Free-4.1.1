<template>
    <div class="w-100  containerTab">
        <div class="containerTab w-75 ">
            <h2 style="font-family: Montserrat;">Contactenos</h2>
            <form action="https://formsubmit.co/your@email.com" method="POST">
                <input type="text" name="name" required placeholder="Ingrese su nombre">
                <input type="email" name="email" required placeholder="Ingrese su correo">
                <input type="phone" name="phone" required placeholder="Ingrese su telefono">
                <button type="submit">Enviar</button>
           </form>
        </div>    
    </div>

</template>

<script setup lang="ts">
const props = defineProps(['background','buttonColor','buttonHover'])
</script>

<style scoped>
.containerTab {
    background-color: v-bind(background);
    margin: 0;
    display: flex;
    flex-direction: column;     
    align-items: center;
    padding: 10px;
}
 form{
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    justify-content: center;
    align-items: center; 
}
form input{
    width: 40dvw;
    height: 5.5dvh;
}
form button{
    background-color: v-bind(buttonColor);
    color: #000000;
}
form button:hover{
    background-color: v-bind(buttonHover);
}
@media screen  and (max-width: 750px){
    form input{
        width: 65dvw;
        
    }
}
</style>