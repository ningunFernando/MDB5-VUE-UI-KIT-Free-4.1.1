<template>
    <div class="d-flex justify-content-center">
    <MDBCard class="mdbCard" style="padding: 10px;">
        <MDBCardImg
        :src="data.img"
          top
          alt="..."
          class="img"
        />
        <MDBCardBody>
          <MDBCardTitle>{{data.title}}</MDBCardTitle>
          <MDBCardText>
            {{data.text}}
          </MDBCardText>
          <MDBBtn tag="a" :href="data.link" color="primary">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
</template>

<script setup lang="ts">
    import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";

    defineProps({
        data:{
            type:Object,
            required:true
        }
    })
</script>
<style scoped>
    .mdbCard{
        width: 20.5dvw;
        background-color: rgb(249, 249, 249);
        box-shadow: 2px 4px 7px rgb(185, 185, 185);
        margin-bottom: 2rem;
    }

    @media(max-width:600px){
        .mdbCard{
            width: 95dvw;
            margin: 2rem;
        }
    }
</style>