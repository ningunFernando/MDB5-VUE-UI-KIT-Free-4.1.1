<template>
    <div class="info-container">

        <div class="map">
            <div class="map-content">
                <div class="content-width"> 
                    <h2>Conoce nuestra ubicacion</h2>
                    <p>Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y de los desarrollos turísticos más importantes del país.</p>
                </div>
            </div>
            <div class="map-iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.860671597177!2d-105.28768082469017!3d20.732843895715636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146e1b2098eb9%3A0x2d550fa0c1bcee86!2sAgave%20Azul%20%26%20Callej%C3%B3n%20A%20la%20Laguna%2C%20Ni%C3%B1os%20H%C3%A9roes%2C%2063735%20Mezcales%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1705111491455!5m2!1ses-419!2smx" width="760" height="500" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="apartment-container">
            <div class="apartment-photo">
                <img class="" src="../assets/sa_2.jpg" alt="">
            </div>
            <div class="apartment-info">
                <div class="info-icons-container">
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <div class="info-icons-container">
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <div class="info-icons-container">
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div class="info-container-card">
                        <i class="fas fa-home"></i>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.info-container{
    display: flex;
    flex-direction: column;
}

.map{
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
}

.map-content{
    background-color: #60713a;
    color:beige;
    display: flex;
    flex-direction: column;
    width: 50dvw;
    justify-content: center;
}

.content-width{
    width: 38dvw;
    margin-left: 2rem;
    font-weight: 200;
}

.map-iframe iframe{
    width: 50dvw;
}


.apartment-container{
    display: flex;
    flex-direction: row;
    
}

.apartment-photo img{
    width: 49.5dvw;
    height: 30dvw;
}
.apartment-info{
    background-color: #60713a;
    width: 50dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(229, 229, 229);
}
.info-icons-container{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
    width: 30dvw;
    gap: 6.5rem;
}
.info-icons-container i{
font-size: 2rem;
}
.info-container-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10dvw;
}

@media (max-width:600px){
    .map{
        flex-direction: column;
    }
    .map-content{
        width: 100dvw;
    }
    .content-width{
        width: 80dvw;
        margin: 2rem;
        font-weight: 200;
    }

    .content-width p{
        margin-top: 1.1rem;
    }
    .map-iframe iframe{
        width: 100dvw;
    }
    .apartment-container{
       flex-direction: column; 
    }
    .apartment-photo img{
        width: 100dvw;
        height: 30dvh;
        margin-top: -.5rem;
    }
    .apartment-info{
         width: 100dvw;
         padding-bottom: 1rem;
    }
}

</style>