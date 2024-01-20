<template>
    <div class="containerTab">
        <div class="d-flex flex-column align-items-center">
            <h2>{{title}}</h2>  
            <MDBTabs v-model="activeTabId3">
                <!-- Tabs navs -->
                <MDBTabNav justify tabsClasses="mb-3" class="tab">
                    <MDBTabItem tabId="ex3-1" href="ex3-1" >{{model_name}}</MDBTabItem>
                    <div class="hidder">
                        <MDBTabItem tabId="ex3-2" href="ex3-2"  class="hidder" >{{model_name}}</MDBTabItem>
                    </div>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                    <MDBTabPane tabId="ex3-1">
                        <div class="d-flex justify-content-around tabFlex gap-5">
                            <img class="" src="../assets/sa_2.jpg" alt="">
                            <div class="styler">
                                <ul class="fs-5">
                                <li>2 Recamaras </li>
                                <li>2 Baños</li>
                                <li>Sala</li>
                                <li>Comedor</li>
                                <li>Cocina</li>
                                <li>Area de servicio</li>
                                </ul>
                            </div>
                        </div>
                    </MDBTabPane>
                    <div class="hidder">
                        <MDBTabPane tabId="ex3-2" class=" hidder">
                            <div class="d-flex  justify-content-around tabFlex">
                                <img class="w-50" src="../assets/sa_2.jpg" alt="">
                                <div class="d-flex flex-column justify-content-center align-items-center">
                                    <p>{{}}</p>
                                    <ul>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    <li>aaaaaaaaaaaaaaaaaaaaa</li>
                                    </ul>
                                </div>
                            </div>
                        </MDBTabPane>
                    </div>
                </MDBTabContent>
                <!-- Tabs content -->
            </MDBTabs>
        </div>
    </div>
  </template>

  <script setup lang="ts">
  import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
  } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  const activeTabId3 = ref('ex3-1');

  const props = defineProps(['img', 'title','model_name', 'bg_color', 'hidder','meters'])
</script>

<style scoped>
.tab{
   padding: 5px;
   width: 20dvw;
   color: black;

}
.tabFlex{
    align-items:center;
}

.hidder{
    display: v-bind(hidder);
}

.containerTab{
    padding: 4rem 2rem;
    background-color:v-bind(bg_color);

}
.containerTab li{
    padding-top: 10px;

}
.containerTab img{
    display: flex;
    flex-direction: column;     
    align-items: center;
    width: 40dvw;
}

@media(max-width:600px){
    .tab-container{
        flex-direction: column;
    }   
    .tabFlex{
        align-items: center;
        flex-direction: column;
    }
    .tabFlex img{
        width: 100%;
    }
    
}
</style>