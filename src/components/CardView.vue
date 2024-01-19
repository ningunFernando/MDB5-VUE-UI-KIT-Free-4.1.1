<template>
    <div class="d-flex justify-content-center h-100">
    <MDBCard class="mdbCard" style="padding: 0px;  ">
        <MDBCardImg
        :src="data.img"
          top
          alt="..."
          class="img  h-75"
        />
        <MDBCardBody>
          <MDBCardTitle>{{data.title}}</MDBCardTitle>
          <div class="date d-flex flex-row">
            <i class="far fa-clock"></i>
            <p>{{data.text}}</p>
          </div>
          <RouterLink :to="data.link" class="button">Ver mas</RouterLink>
        </MDBCardBody>
      </MDBCard>
    </div>
</template>

<script setup lang="ts">
  import { RouterLink } from "vue-router";
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
        width: 22dvw;
        background-color: rgb(249, 250, 255);
        box-shadow: 1px 3px 4px rgb(185, 185, 185);
        margin-bottom: 2rem;
    }

    

    .button{
      background-color: #0f71f2;
      color: aliceblue;
      padding: .4rem 2rem;
      border-radius: 5px;
    }
    .date{
      color: #a5aaab;
    }
    .date i{
      margin: .3rem .5rem 0 0;
    }

    .img{
      padding: 10rem;
    }

    @media(max-width:600px){
        .mdbCard{
            width: 95dvw;
            margin: 2rem;
        }
    }
</style>