<template>
    <div class="info-container">

        <div class="map">
            <div class="map-content">
                <div class="content-width"> 
                    <h2>{{title}}</h2>
                    <p>{{description}}</p>
                </div>
            </div>
            <div class="map-iframe">
                <iframe :src="iframe" width="760" height="500" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="apartment-container" style="background-color: #60713a;">
            <div class="apartment-photo">
                <img class="" :src="apartment_photo" alt="">
            </div>
            <div class="apartment-info">
                <div class="info-icons-container">
                    <div class="info-container-card d-flex flex-row">
                        <i :class="icon2" class="p-4"></i>
                        <div class="rect d-flex flex-column">
                            <p>{{icon_title}}</p>
                            <p >{{icon_info2}}</p>
                        </div>
                    </div>
                    <div class="info-container-card d-flex flex-row ">
                        <i :class="icon4" class="p-4"></i>
                        <div class="rect d-flex flex-column">
                            <p>{{icon_title2}}</p>
                            <p>{{icon_info4}}</p>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">

const props = defineProps(['title', 'description', 'iframe', 'apartment_photo','icon','icon_info','icon2','icon_info2','icon3','icon_info3','icon4','icon_info4', 'color', 'icon_title', 'icon_title2'])

</script>

<style scoped>
.info-container{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.a{
    text-align: justify;
    width: 50dvw;
}

.map{
    display: flex;
    flex-direction: row;
    margin: 0 0 0 0;
}
.rect{
    text-align: justify;
}
.map-content{
    background-color: v-bind(color);
    color:beige;
    display: flex;
    flex-direction: column;
    width: 50dvw;
    justify-content: center;
}

.content-width{
    width: 40dvw;
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
    width: 48.9dvw;
    height: 30dvw;
}
.apartment-info{
    width: 50dvw;
    background-color: v-bind(color);
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
    width: 33dvw;
    gap: 3rem;
}
.info-icons-container i{
font-size: 3rem;
}
.info-container-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 52dvw;
}
.apartment-container p{
    width: 16dvw;

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
    .apartment-container p{
        width: 30dvw;
    
    }

    .info-icons-container{
        display: flex;
        flex-direction: column;
    }
}

</style>