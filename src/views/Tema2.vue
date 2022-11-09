<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ayudas Humanitarias
    
    .row.container.justify-content-around.align-items-center 
      .row 
        .col-lg-8.fondo-izq-tarjeta1-tema2(data-aos="fade-left")
          .fondo-texto-tarjeta1-tema2.p-3
            p El constante aumento en el número de desastres y el impacto que tienen sobre las poblaciones, es un factor fundamental que se debe tener en cuenta, ya que los niveles de vulnerabilidad han crecido exponencialmente, siendo los asentamientos en zonas de riesgo una de las principales causas de pérdidas de vida humanas cuando ocurre una situación de emergencia, es por esto que las ayudas humanitarias deben prever la reubicación de aquellas personas que se encuentren en estas zonas. 
            p.texto-verde-tarjeta1-tema2 Las ayudas humanitarias están diseñadas específicamente para alivianar el sufrimiento de las personas que fueron afectadas por un evento de desastre, por lo tanto, todas las acciones en pro de salvar vidas, prevenir emergencias, proteger y mantener la dignidad de los seres humanos serán de vital importancia para subsanar los daños provocados por la situación de emergencia. 

        .col-lg-4.fondo-der-tarjeta1-tema2.p-4
            figure(data-aos="fade-down-right")
              img(src='@/assets/curso/temas/imagen1-tema2.png' alt='AvatarTop').imagen-tarjeta1-tema2
            
            p.texto-invisible Lorem ipsum dolor
      
    br
    br
    br

    .row.container.justify-content-around.align-items-center 


      p Teniendo en cuenta lo presentado previamente, existen cuatro principios básicos que se deben cumplir a cabalidad para que la ayuda humanitaria se desarrolle de manera adecuada: 

      SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-imparcialidad-tema2.png' alt='AvatarTop')
            h2.text-center Imparcialidad:
            p.text-center Las ayudas humanitarias se deben adelantar dando prioridad a los casos que más presenten urgencia, en donde no existe la discriminación por raza, sexo, creencias religiosas, nacionalidad ni ninguna otra característica que pueda ser motivo de distinción. 
            //p.texto-invisible Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sapiente quis tenetur laboriosam magni voluptates cumque quia quibusdam ratione dicta? Dignissimos exercitationem aperiam eius illum iure cupiditate error aspernatur molestiae?

          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-humanidad-tema2.png' alt='AvatarTop')
            h2.text-center Humanidad:
            p.text-center Su principal objetivo es proteger la salud y la vida de las personas afectadas garantizando el respeto de los seres humanos, por lo que el sufrimiento humano siempre debe ser una prioridad y atenderlo sin importar el lugar en el que se encuentre.
            
          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-ind-oper-tema2.png' alt='AvatarTop')
            h2.text-center Independencia operativa:
            p.text-center Las ayudas se deben realizar de manera autónoma y ajena a cualquier fin económico, político o cualquier otro que pretenda lucrarse con estas acciones. 
            p.texto-invisible Lorem, ipsum dolor 
          

          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-neutralidad-tema2.png' alt='AvatarTop')
            h2.text-center Neutralidad:
            p.text-center Los participantes de la ayuda humanitaria no deberán hacer parte de las hostilidades que puedan presentarse por controversias de índole religioso, racial, ideológico o político.
            p.texto-invisible Lorem, ipsum dolor 

          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-voluntariado-tema2.png' alt='AvatarTop')
            h2.text-center Voluntariedad:
            p.text-center Los ciudadanos pueden ofrecerse como voluntarios a organizaciones que lo requieran y así apoyar en la ejecución de diferentes labores que sean necesarias.
            p.texto-invisible Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            
          .tarjeta.tarjetas-carrusel.color-primario.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/imagen-donaciones-tema2.png' alt='AvatarTop')
            h2.text-center Donaciones:
            p.text-center Es la combinación entre los recursos simples que se encuentran dentro del área de control, los cuales pueden ser de diferente clase que estén constituidas para una necesidad especifica. Cuenta con un líder y un equipo de comunicaciones
            //p.texto-invisible Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, corrupti beatae. Nostrum quo molestiae, iure quisquam voluptatibus nemo ut nulla culpa, hic quae natus nam numquam. 
    
    separador          

    br
    br
    br

    .row.container.justify-content-around.align-items-center 

      #tipos-de-ayuda-humanitaria
      .titulo-segundo.color-acento-contenido
        h2 2.1.  Tipos de ayuda humanitaria
      
      p Las ayudas humanitarias se pueden clasificar según el tipo de atención necesaria y el tipo de ayuda. Por consiguiente se explicará cada una de ellas: 


      
      .row.justify-content-center.mb-5
        figure
          img(src='@/assets/curso/temas/imagen-der-pasos-verticales.png' alt='AvatarTop').imagen-der-pasos-verticales-tema2
        
        .col-lg-8
          LineaTiempoD.color-secundario
          
            p(numero="1" titulo="Atención humanitaria inmediata") La ayuda humanitaria es estregada por parte de la entidad territorial que en este caso sería la Alcaldía Municipal, la cual recibe a las poblaciones que han sido víctimas de desplazamientos. Esta adelanta todo el proceso desde que las victimas rinden su declaración hasta que son incluidas en el Registro Único de Victimas, el cual pretende garantizar los componentes de alimentación, artículos de aseo, administración de abastecimientos, utensilios de cocina y alojamiento transitorio. 

            p(numero="2" titulo="Ayuda humanitaria de emergencias") Estas ayudas son entregadas por parte de la Unidad para las Víctimas a las poblaciones que previamente fueron incluidas en el Registro Único de Victimas por parte de la entidad territorial. Dichas poblaciones se deberán encontrar dentro del primer año de desplazamiento, identificando un alto grado de necesidad con respecto a los componentes de la subsistencia mínima. 

            p(numero="3" titulo="Atención humanitaria en transición") Se otorga directamente por la Unidad para las Victimas a la población que haya sido víctima de desplazamiento forzado, el cual haya ocurrido en un término superior a un año y que, de acuerdo con el análisis de la situación actual, las carencias que presenten sean leves en los componentes de alojamiento temporal y/o alimentación. 

            p(numero="4" titulo="Ayuda de emergencia") Es el resultante de una situación de emergencia que haya sido provocada por el hombre o por una catástrofe natural. Esta ayuda se categorizara entre ayuda y servicios materiales de emergencia, ayuda alimentaria de emergencia y coordinación de los servicios de protección de la ayuda. 

            p(numero="5" titulo="Ayuda de construcción y rehabilitación") Son todas aquellas actuaciones que no son inmediatas porque tienen un enfoque a largo plazo, las cuales están orientadas a que el país receptos logre superar la crisis humanitaria. 

            p(numero="6" titulo="Prevención de desastres") Son las actividades que se destinan para reducir los riesgos de desastres y planear estrategias para anticiparse a eventos que puedan traer repercusiones en las vidas humanas y el medio ambiente. 
          
        .col-8.col-lg-4
          figure  
            img(src="@/assets/curso/temas/imagen-pasos-verticales-tema2.png", alt="alt").imagen-pasos-verticales-tema2
        

    br
    br
    br

    .row.container.justify-content-around.align-items-center 

        #ayuda-humanitaria-de-emergencias
        .titulo-segundo.color-acento-contenido
          h2 2.2. Ayuda Humanitaria de Emergencias

        figure  
              img(src="@/assets/curso/temas/imagen-fondo-tar-ayuda-human.png", alt="alt").imagen-fondo-ayuda-human
        
        .row.tarjeta.fondo-color-tar-ayuda-human-emergencias.p-4

          .col-lg-8(data-aos="fade-left")
            p.texto-color-tar-ayuda-human-emergencias Tiene como principal objetivo el desarrollo de acciones encaminadas hacia el manejo de desastres, permitiendo proteger y atender de manera oportuna las necesidades de las personas que fueron afectadas por la emergencia, en cuanto a los procesos de asistencia humanitaria en situaciones básicas. Esta ayuda prestará las atenciones de salud y psicología que se necesiten en donde se protegerá la dignidad humana de las comunidades que fueron afectadas. 
            p.texto-color-tar-ayuda-human-emergencias Las instituciones que se dediquen a prestar ayudas humanitarias, tienen la de finalidad de facilitar el proceso de respuesta humanitaria, asegurando que sea rápida y eficaz, en donde se cumplan con los estándares mínimos humanitarios y que se dé respuesta a las necesidades particulares de mujeres, hombres y niños por igual, respetando por encima de cualquier cosa los Derechos Humanos en donde se incluya a la comunidad receptora de la ayuda humanitaria.

          .col-lg-4
            figure  
              img(data-aos="fade-down-right")(src="@/assets/curso/temas/imagen-ayuda-human.png", alt="alt").imagen-tar-ayuda-human-emergencias
            p.texto-invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas consequatur aut dolor tempora architecto dolore quos, aliquam voluptatum at! Consequuntur modi excepturi iure 

            
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
