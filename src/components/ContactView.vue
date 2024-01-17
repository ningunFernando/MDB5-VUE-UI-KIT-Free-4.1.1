<template>
    <div id="Contact" class="w-100  containerTab">
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
const props = defineProps(['Background', 'ButtonColor', 'ButtonHover'])
</script>

<style scoped>
.containerTab {
    background-color: v-bind(Background);
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
    background-color: v-bind(ButtonColor);
    width: 15dvw;
    border-radius: 2%;
    box-shadow: 1px 1px 2px #000000;
}
form button:hover{
    background-color: v-bind(ButtonHover);
}
@media screen  and (max-width: 750px){
    form input{
        width: 65dvw;
        
    }
}
</style>