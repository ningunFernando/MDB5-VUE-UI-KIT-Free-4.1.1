<template>
    <div class="cards-wrapper">
        <div class="holder">
            <div class=" cards-holder">
                <div class="d-flex flex-column pt-3 align-items-center card-body"  >
                   
                    <h3 class="font " >{{card_title}}</h3>
                    <div class="d-flex align-items-center pt-4">
                    <i class="ps-5 fs-1" :class="icon"></i>
                    <li class="text-center  font">{{card_text}}</li>
                   
                </div>
                <div class=" cardBottom w-100 "></div>
                </div>
                
                <div class="d-flex flex-column  align-items-center card-body"  >
                    <i class="p-2 fs-1" :class="icon2"></i>
                    <h3 class="font">{{card_title2}}</h3>
                    <p class="text-center font">{{card_text2}}</p>
                    <div class=" cardBottom2 w-100 "><button class="boton font">Ir al Enlace</button></div>
                </div>
                <div class="d-flex flex-column   pt-4 align-items-center card-body"  >
                   
                    <h3 class="font " >{{card_title}}</h3>
                    <div class="d-flex align-items-center pt-4">
                    <img class="image" :src="icon3">
                    <li class="text-center  font">{{card_text}}</li>
                   
                </div>
                <div class=" cardBottom w-100 "></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['title','text','icon','icon2','icon3', 'card_title', 'card_text', 'card_title2', 'card_text2', 'card_title3', 'card_text3','color','card_color', 'bg_color'])
</script>

<style scoped>
.font{
    font-family: Montserrat;
}
.image{
    width: 6dvw;
    padding-left: 10%;
}
.card-body{
    position: relative; 
  background-color: v-bind(card_color);
  color: v-bind(color);
  border-radius: 2%;
  margin: 2rem;
  width: 20dvw;
  border: 1px solid #a4a4a4;
  height: 30dvh;
  font-size: 18px;

}
.boton{
    background-color: #3284ff;
    border-radius: 5%;
    border: 1px solid #3284ff;
    align-items: center;
    margin-left: 10px;
    font-size: 12px;
    color: white;
    
}

.card-body p{
    width: 20dvw;
    
}
.card-body li{
    width: 20dvw;
    
}
.cards-wrapper{
    background-color: v-bind(bg_color);
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

}


.holder{
    display: flex;
    flex-direction: column;

    margin: auto;
    width: 80dvw;
}
.cards-holder{
    display: flex;
    flex-direction: row;
    position: relative;
    font-size: 20px;
}
.cardBottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:8%;
    background-color: #dfdfdf;
    border-top: 1px solid #a4a4a4;
}
.cardBottom2{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:15%;
    background-color: #dfdfdf;
    border-top: 1px solid #a4a4a4;
}
@media (max-width:600px){
    .cards-holder{
        flex-direction: column;
    }
    .card-body{
        margin: 1rem 0;
        width: 80dvw;
    }
    
    .card-body p{
        width: 60dvw;
    }
    .cards-wrapper{
        padding: rem 0;
    }
}
</style>