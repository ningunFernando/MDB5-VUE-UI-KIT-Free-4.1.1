<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class=" tabs-container w-100 d-flex flex-column align-items-center">  
            <MDBTabs v-model="activeTabId3">
                <!-- Tabs navs -->
                <MDBTabNav justify tabsClasses="mb-3">
                    <MDBTabItem tabId="ex3-1" href="ex3-1">Link</MDBTabItem>
                </MDBTabNav>
                <!-- Tabs navs -->
                <!-- Tabs content -->
                <MDBTabContent>
                    <MDBTabPane tabId="ex3-1">
                        <div class="d-flex flex-row justify-content-around">
                            <img class="w-50" src="../assets/sa_2.jpg" alt="">
                            <div class="d-flex flex-column justify-content-center align-items-center">
                                <ul>
                                    <li>aaaaaaa</li>
                                    <li>aaaaaaa</li>
                                    <li>aaaaaaa</li>
                                    <li>aaaaaaa</li>
                                    <li>aaaaaaa</li>
                                    <li>aaaaaaa</li>
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
</script>

<style scoped>

</style>