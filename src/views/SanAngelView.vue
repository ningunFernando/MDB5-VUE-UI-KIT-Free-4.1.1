<template>
    <NavBar
    font_family=" Nova Mono"
    text_color="#FAFBED"
    Frametextcolor="text-white"
    color="#60713a"
    position="top"
    />

    <Slider
    img1="https://prismatic-blini-62ad83.netlify.app/sa_4.jpg"
    img2="https://silly-sopapillas-764d9e.netlify.app/assets/sa_1.6469af53.jpg"
    img3="https://silly-sopapillas-764d9e.netlify.app/assets/sa_1.6469af53.jpg"
    imgv1="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    imgv2="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    imgv3="https://silly-sopapillas-764d9e.netlify.app/assets/sav_2.dbe27187.jpg"
    texto1=""
    texto2="hola2"
    texto3="hola3"
    />

    <WelcomeView
    title="Bienvenido"
    description="Bienvenido a San Ángel, donde vivir en una comunidad exclusiva es una realidad. Garantizamos tu inversión con propiedades de lujo en un entorno excepcional. En San Ángel, no solo encuentras una casa, encuentras un estilo de vida incomparable."
    iframe="https://kuchenconstrucciones.viewin360.co/share/collection/7XWJL?logo=1&info=0&logosize=88&fs=1&vr=0&zoom=1&gyro=0&thumbs=1&alpha=0.60&inst=es"
    link="https://kuchenconstrucciones.viewin360.co/share/collection/7XWJL?logo=1&info=0&logosize=88&fs=1&vr=0&zoom=1&gyro=0&thumbs=1&alpha=0.60&inst=es"
    bg_color="#faf3eb"
    btn_color="#60713a"
    />

    <UtilitiesView
      color="#60713a"
      title="Conoce nuestra ubicacion"
      description="A metros de la Carretera 200, a 10 minutos a Bucerias y sus playas, Centro Comercial, Gasolineras y muy cerca de el parque tematico mas grande en Nuevo Nayarit"
      iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.2198071708772!2d-105.28646959352155!3d20.732762916551703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84214700520de6df%3A0x39236d54b2a266f4!2sCondominio%20San%20%C3%81ngel!5e0!3m2!1ses-419!2smx!4v1705718864963!5m2!1ses-419!2smx"
      apartment_photo="https://silly-sopapillas-764d9e.netlify.app/assets/sa_2.5416a1c2.jpg"
      icon="fa fa-map-marker-alt"
      icon_info="Ubicacion privilegiada: A metros de la Carretera 200, a 10 minutos a Bucerias y sus playas, Centro Comercial, Gasolineras y muy cerca de el parque tematico mas grande en Nuevo Nayarit"
      icon2="fa fa-coins"
      icon_title="Exclusividad"
      icon_info2="Con unicamente 6 unidades con una comunidad con la cual tendras un gran estilo de vida"
      icon3="fa fa-home"
      icon_info3=""
      icon4="fa fa-umbrella-beach"
      icon_title2="Area Recreativa"
      icon_info4="Zona de Roof Garden con camastros, jacuzi, mesas y area de asador   "
    />

    <ModelsTab
    title="Descucre nuestro modelo"
    model_name="San Angel"
    bg_color="#faf3eb"
    hidder="none"
    meters="72.3 Metros Cu"
    />

    <ContactView
      Background="#faf3eb"
      ButtonColor="#60713A"
      ButtonHover="#4c5a2e"
    />

    
  </template>
  
  <script setup lang="ts">
    import Slider from '../components/Slider.vue';
    import WelcomeView from '../components/WelcomeView.vue';
    import UtilitiesView from '../components/UtilitiesView.vue';
    import ModelsTab from '../components/ModelsTab.vue';
    import NavBar from '../components/NavBar.vue';
    import ContactView from '../components/ContactView.vue';
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
  </script>
  
  <style scoped>

  </style>