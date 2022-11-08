<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center

    
      .col-md.col-lg-7
        
        p.p-2 Estimado Aprendiz. En este Componente Formativo se abordarán las técnicas y herramientas fundamentales para ejecutar de manera correcta las acciones en caso de desastres o situaciones de peligro inminente, de acuerdo con la estrategia de respuesta a emergencias – ERE, teniendo en cuenta que, con el conocimiento de los daños y efectos de alguna emergencia, se puede determinar el lugar preciso donde es necesitada la ayuda, cómo y cuánto es necesario para que las victimas sean recompensadas por el desastre.
        p.p-2 Adicionalmente, se hará énfasis en que la prioridad ante una situación de desastre siempre será la preservación de la mayor cantidad de vidas humanas posibles, por lo que se necesita una coordinación de los diversos sectores involucrados y la supervisión de los entes de control para que el proceso sea transparente y se cumplan con todos los estándares establecidos para la atención a desastres. 
        p.p-2 Por favor explore con atención el siguiente video que le mostrará lo que se debe tener muy presente a la hora de enfrentar una emergencia.

    
      .col-md.col-lg-5
        img(src="@/assets/curso/temas/imagen-introduccion.png")

    .row.tarjeta.tarjeta--blanca.p-2.p-md-3

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
