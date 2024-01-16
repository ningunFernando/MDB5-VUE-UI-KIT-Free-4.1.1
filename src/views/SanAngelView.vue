<template>
    <NavBar
    font_family=" Nova Mono"
    text_color="#FAFBED"
    Frametextcolor="text-white"
    color="#60713a"
    position="top"
    />

    <Slider
    img1="https://silly-sopapillas-764d9e.netlify.app/assets/sa_1.6469af53.jpg"
    img2="https://silly-sopapillas-764d9e.netlify.app/assets/sa_1.6469af53.jpg"
    img3="https://silly-sopapillas-764d9e.netlify.app/assets/sa_1.6469af53.jpg"
    imgv1="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    imgv2="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    imgv3="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    texto1="hola1"
    texto2="hola2"
    texto3="hola3"
    />

    <WelcomeView
    title="Bienvenido"
    description="Bienvenido a San Ángel, donde vivir en una comunidad exclusiva es una realidad. Garantizamos tu inversión con propiedades de lujo en un entorno excepcional. En San Ángel, no solo encuentras una casa, encuentras un estilo de vida incomparable."
    iframe="https://kuula.co/share/collection/7Xwz8?logo=-1&info=0&fs=1&vr=0&gyro=0&thumbs=1&alpha=0.60&inst=es"
    link="https://kuula.co/share/51BJq/collection/7Xwz8?logo=-1&info=0&fs=1&vr=0&gyro=0&thumbs=1&alpha=0.60&inst=es"
    bg_color="#faf3eb"
    btn_color="#60713a"
    />

    <UtilitiesView
      color="#60713a"
      title="Conoce nuestra ubicacion"
      description="Cerca de todo lo necesario para una vida plena, a metros de la carretera 200 y el crucero de mezcales cerca de los desarrollos turísticos y playas mas importantes de la bahia"
      iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.860671597177!2d-105.28768082469017!3d20.732843895715636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146e1b2098eb9%3A0x2d550fa0c1bcee86!2sAgave%20Azul%20%26%20Callej%C3%B3n%20A%20la%20Laguna%2C%20Ni%C3%B1os%20H%C3%A9roes%2C%2063735%20Mezcales%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1705111491455!5m2!1ses-419!2smx"
      apartment_photo="https://silly-sopapillas-764d9e.netlify.app/assets/sa_2.5416a1c2.jpg"
      icon="fa fa-clock"
      icon_info="A 10 minutos de la playa"
      icon2="fa fa-camera"
      icon_info2="esta es una prueba con props"
      icon3="fa fa-home"
      icon_info3="esta es una prueba con props"
      icon4="fa fa-camera"
      icon_info4="hola"
    />

    <ModelsTab
    title="Descucre nuestro modelo"
    model_name="San Angel"
    background="#faf3eb"
    />

    <ContactView
    background="#faf3eb"
    buttonColor="#60713A"
    buttonHover="#4c5a2e"
    />
  </template>
  
  <script setup lang="ts">
    import Slider from '../components/Slider.vue';
    import WelcomeView from '../components/WelcomeView.vue';
    import UtilitiesView from '../components/UtilitiesView.vue';
    import ModelsTab from '../components/ModelsTab.vue';
    import NavBar from '../components/NavBar.vue';
    import ContactView from '../components/ContactView.vue';
  </script>
  
  <style scoped>

  </style>