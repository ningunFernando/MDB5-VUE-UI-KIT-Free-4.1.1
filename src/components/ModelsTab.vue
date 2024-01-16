<template>
    <div class="container">
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
                        <div class="d-flex flex-column justify-content-around ">
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

.container{
    padding: 4rem 2rem;
}

@media(max-width:600px){
    .tab-container{
        flex-direction: column;
    }   
}
</style>