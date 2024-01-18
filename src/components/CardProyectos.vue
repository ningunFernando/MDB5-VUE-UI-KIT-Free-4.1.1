<template>
    <div class="cards-wrapper">
        <div class="holder">
            <div class=" cards-holder">
                <div class="d-flex flex-column justify-content-center align-items-center card-body"  >
                    <i class="p-3 fs-1" :class="icon"></i>
                    <h3 class="font">{{card_title}}</h3>
                    <p class="text-center fs-5 font">{{card_text}}</p>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center card-body"  >
                    <i class="p-3 fs-1" :class="icon2"></i>
                    <h3 class="font">{{card_title2}}</h3>
                    <p class="text-center fs-5 font">{{card_text2}}</p>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center card-body"  >
                    <i class="p-3 fs-1" :class="icon3"></i>
                    <h3 class="font">{{card_title3}}</h3>
                    <div class="list-container">
                        <ul class="text-center fs-5 font ">
                            <li>{{card_list1}}</li>
                            <li>{{card_list2}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['title','text','icon','icon2','icon3', 'card_title', 'card_text', 'card_title2', 'card_text2', 'card_title3', 'card_list1','card_list2','color','card_color', 'bg_color'])
</script>

<style scoped>
.font{
    font-family: Montserrat;
}
.card-body{
    background-color: v-bind(card_color);
    color: v-bind(color);
    border-radius: 2%;
    margin: 2rem;
    width: 20dvw;
}

.card-body p{
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