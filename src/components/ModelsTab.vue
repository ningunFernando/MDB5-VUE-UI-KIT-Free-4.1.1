<template>
    <div class="containerTab">
        <div class="d-flex flex-column align-items-center">
            <h2>{{title}}</h2>  
            <MDBTabs v-model="activeTabId3">
                <!-- Tabs navs -->
                <MDBTabNav justify tabsClasses="mb-3" class="tab">
                    <MDBTabItem tabId="ex3-1" href="ex3-1" >{{model_name}}</MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                    <MDBTabPane tabId="ex3-1">
                        <div class="d-flex  justify-content-around tabFlex">
                            <img class="w-75" src="../assets/sa_2.jpg" alt="">
                            <div class="d-flex flex-column justify-content-center align-items-center">
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

  const props = defineProps(['img', 'title','model_name'])
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

.containerTab{
    padding: 4rem 2rem;

}
.containerTab li{
    padding-top: 10px;
}
.containerTab img{
    display: flex;
    flex-direction: column;     
    align-items: center;
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