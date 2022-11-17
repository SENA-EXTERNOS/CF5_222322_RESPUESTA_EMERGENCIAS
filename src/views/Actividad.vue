<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  //(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Actividad didáctica

    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/img-actividad.png", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Arrastrar y soltar
        p.mb-4 Estimado aprendiz. La actividad planteada consiste en relacionar las columnas, en una se deben poner los términos y en la otra las definiciones, el objetivo es que el aprendiz haga la unión entre término y definición y de esta manera haga un repaso de lo estudiado en este componente.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/Actividad_Didáctica-CF5 - T_222322_Respuestas a emergencias - Storyline output/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
