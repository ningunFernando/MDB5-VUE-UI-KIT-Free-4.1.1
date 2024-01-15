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
                    <div class="info-container-card">
                        <i :class="icon"></i>
                        <p>{{icon_info}}</p>
                    </div>
                    <div class="info-container-card">
                        <i :class="icon2"></i>
                        <p>{{icon_info2}}</p>
                    </div>
                </div>
                <div class="info-icons-container">
                    <div class="info-container-card">
                        <i :class="icon3"></i>
                        <p>{{icon_info3}}</p>
                    </div>
                    <div class="info-container-card">
                        <i :class="icon4"></i>
                        <p>{{icon_info4}}</p>
                    </div>
                </div>
                <div class="info-icons-container">
                    <div class="info-container-card">
                        <i :class="icon3"></i>
                        <p>{{icon_info3}}</p>
                    </div>
                    <div class="info-container-card">
                        <i :class="icon4"></i>
                        <p>{{icon_info4}}</p>
                    </div>
                </div>  
            </div>

        </div>

    </div>
</template>

<script setup lang="ts">

const props = defineProps(['title', 'description', 'iframe', 'apartment_photo','icon','icon_info','icon2','icon_info2','icon3','icon_info3','icon4','icon_info4', 'color'])

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
    background-color: v-bind(color);
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