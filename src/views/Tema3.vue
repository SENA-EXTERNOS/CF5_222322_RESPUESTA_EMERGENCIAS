<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Puestos de mando - PMU

    .row.container.justify-content-around.align-items-center 

      .row.tarjeta.color-fondo-tar1-tema3.p-4
        figure
            img(src='@/assets/curso/temas/imagen-fondo-tar1-tema3.png' alt='AvatarTop').imagen-fondo-tar1-tema3

        .col-lg-5
          figure
            img(src='@/assets/curso/temas/imagen1-tema3.png' alt='AvatarTop').imagen-tar1-tema3

        .col-lg-7
          p.texto-fondo-tar1-tema3 El Puesto de Mando Unificado - PMU es un lugar físico definido bajo ciertas características el cual ejerce la función de mando dentro de un evento de emergencia. Es allí donde se concentra y coordina los diferentes asuntos operacionales que conciernen a un incidente o evento determinado. 
          p.texto-fondo-tar1-tema3 Los PMU están conformados por personal que cuenta con injerencia operativa los cuales se despliegan en un mismo territorio dependiendo de la cantidad y la complejidad de los eventos que ocurran. En estos puestos de mando es donde se toman las decisiones operacionales sobre cómo manejar las ayudas humanitarias y las acciones para prevenir próximos eventos catastróficos. 

    br
    br
    br
    
    .row.container.justify-content-around.align-items-center 

      .col-lg-8(data-aos="fade-left")
        .bloque-texto-color-tar2-tema3
        p.texto-tar2-tema3 Estos puestos hacen seguimiento al plan de acción, evaluando su ejecución constantemente sobre los requerimientos y novedades que se presentan en el lugar con el fin de mantener actualizada la bitácora del evento; hace recomendaciones en cuanto a medidas de seguridad; suministra insumos para la información pública y verifica el avance de la emergencia hasta su cierre.

      .col-lg-4
        figure
            img(data-aos="fade-right")(src='@/assets/curso/temas/imagen2-tema3.png' alt='AvatarTop').imagen-tar1-tema3

    separador
  
    br
    br
    
    .row.container.justify-content-around.align-items-center 

    
        #caracteristicas
        .titulo-segundo.color-acento-contenido
          h2 3.1. Características
        
        p Teniendo en cuenta lo explicado hace un momento, ahora se describen las funciones y características específicas que tienen los Puestos de Mando Unificado PMU:  

        
      
        .bg--img_03
          .row.justify-content-center.mb-4

            figure
              img(src='@/assets/curso/temas/imagen-lat-der-acord-tema3.png' alt='AvatarTop').imagen-lat-der-acord-tema3
            
            .col-lg-8
              AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA").tarjeta.fondo-color-acordeon-tema3
                .row(titulo="Mando")
                  .col-12.texto-acordeon-tema3
                    p.mb-0 Es el encargado de administrar, coordinar, dirigir y controlar los recursos que sean asignados para el evento de emergencia. El mando puede estar a cargo de una sola organización o ser unificado en donde hacen parte dos o más instituciones. Las principales responsabilidades del mando son las siguientes: 
                  
                    br
                    
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                        | Debe garantizar la seguridad de todo el personal que preste sus servicios operativos. 
                      li 
                        i.lista-ul__vineta
                        | La situación del evento debe ser evaluado periódicamente para tener una concepción clara del avance o retroceso en el proceso de respuesta.
                      li 
                        i.lista-ul__vineta
                        | Se debe informar a las autoridades los logros obtenidos y a su vez las fallas o falencias dentro del proceso. 
                      li 
                        i.lista-ul__vineta
                        | Es necesario que se establezca un nivel de organización para el monitoreo continuo del funcionamiento del plan de acción. 
                      
                      p Está encargado de administrar todos los recursos destinados a las operaciones del proyecto. 



                .row(titulo="Planificación")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 La planificación es una de las funciones fundamentales del PMU mediante la cual se recolecta, analiza y difunde la información del evento al interior de la estructura, la cual realiza el control de recursos operativos.

                .row(titulo="Operaciones")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 Están encargados de determinar las estrategias que se aplicaran, así como las necesidades de recursos adicionales que se requieran para la correcta operación del sistema. 

                .row(titulo="Logística")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 Los PMU serán los gestores de las instalaciones, servicios y materiales que se puedan necesitar para brindar apoyo a la atención de la emergencia, asegurando el bienestar del personal de respuesta, brindándoles la correcta alimentación y descanso, además deberá suministrar los equipos de comunicación que se requieran. 

                .row(titulo="Administración y finanzas")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 Llevará el control de todos aquellos aspectos administrativos que se deban adelantar en el manejo de las finanzas del evento de emergencia. 

                
                .row(titulo="Seguridad")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 El PMU garantiza la seguridad del personal de respuesta, evaluando y controlando las situaciones peligrosas, que representen un riesgo para las personas involucradas.
                    p.texto-acordeon-tema3 El área debe ser acordonada para asegurar que no ingresen personas externas al evento que puedan salir lesionados en la búsqueda apresurada de pertenencias o de familiares perdidos, en estas situaciones el PMU debe realizar un registro de todas las personas que ingresan y salen de la zona que este acordonada. 
                
                .row(titulo="Información publica")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 Los comunicados de prensa deben estar actualizados para informar del progreso del evento de emergencia.
                    p.texto-acordeon-tema3.mb-0 Con la información recopilada se deben entregar informes tanto parciales como finales. los cuales se utilizaran para que la prensa y los diferentes medios de comunicación cuenten con información de primera mano, en la cual se detallen todos los daños en tanto a pérdidas humanas y de infraestructura que deje una situación de desastre, así se asegura que el proceso sea transparente en relación con las ayudas que deberán recibir las comunidades afectadas.
                    p.texto-acordeon-tema3 La información pública a su vez se utilizará para realizar investigaciones que puedan determinar las causas puntuales de los eventos y poder emprender en ideas para proteger a las comunidades que se encuentren en zonas de alta vulnerabilidad y riesgo, que son los directamente afectados. 
                
                .row(titulo="Enlace")
                  .col-12
                    p.texto-acordeon-tema3.mb-0 Tienen la tarea de mantener el contacto con los representantes de las unidades médicas. Cuentan con un directorio en donde están relacionadas todas las instituciones que fueron o serán participes de la atención a la emergencia para identificar potenciales problemas y contar con el apoyo interinstitucional.

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/imagen-acordeon-caracteristicas.png", alt="alt").img400.m-auto
    
    separador

    .row.container.justify-content-around.align-items-center 
        
      #flexibilidad-de-los-puestos-de-mando-unificado-PMU
      .titulo-segundo.color-acento-contenido
        h2 3.2. Flexibilidad de los Puestos de Mando Unificado - PMU

      .row.fondo-tarjeta-final-tema3
        p Son objetos flexibles, en donde en relación con cada tipo de situación, se privilegia que las entidades que tengan una mayor capacidad operacional y experticia sean las que tomen el mando de las operaciones en una situación de emergencia. 
        p.texto-verde-pmu La flexibilidad permite que se establezcan diferentes estrategias de acuerdo a las necesidades de la situación de emergencia, ya que todas son diferentes, y si bien algunos casos son similares, los costos y el número de víctimas siempre varía. En ciertos casos donde los daños son mínimos o no se vieron afectadas vidas humanas ni sus pertenencias, se pueden utilizar patrones diseñados específicamente para estas situaciones, en donde ya se establecen las acciones que se deben tomar, lo cual facilita el procesamiento de información y comunicación hacia las autoridades pertinentes y medios de comunicación. 
        p El mando del PMU debe estar ejercido por una persona que cuante con la respectiva competencia legal, institucional, jerárquica o técnica el cual tendrá unas responsabilidades particulares las cuales se referencian a continuación: 

        .row
          figure
                img(src="@/assets/curso/temas/img-lat-izq-PMU-tema3.png", alt="alt").img-lat-izq-PMU-tema3
          
          .col-lg-12
            figure(data-aos="zoom-out")
                img(src="@/assets/curso/temas/diagrama-pmu-tema3.png", alt="alt").img-diagrama-pmu-tema3
            

    br
    br
    br
    br

    .row.container.justify-content-around.align-items-center

        .row
          .col-lg-10
              figure(data-aos="flip-up")
                  img(src="@/assets/curso/temas/img-final-tema3.png", alt="alt").img-final-tema3.tarjeta.fondo-img-final-tema3
          



</template>

<script>
export default {
  name: 'Tema3',
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
