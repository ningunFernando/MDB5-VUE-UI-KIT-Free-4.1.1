<template>
    <div class="d-flex justify-content-center">
    <MDBCard class="mdbCard" style="padding: 10px;">
        <MDBCardImg
          src="https://prismatic-blini-62ad83.netlify.app/vilanova-2.jpeg"
          top
          alt="..."
            style="height: 32dvh; width: 29dvw"
            
        />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the
            card's content.
          </MDBCardText>
          <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
</template>

<script setup lang="ts">
    import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";

</script>
<style scoped>
    .mdbCard{
        width: 30dvw;
    }
</style>