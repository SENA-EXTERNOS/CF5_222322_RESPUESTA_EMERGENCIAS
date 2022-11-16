export default {
  global: {
    componenteFormativo: 'Respuesta a emergencias',
    descripcionCurso:
      'En este componente formativo podrá adquirir los conocimientos sobre los procedimientos, herramientas y puestos de mando necesarios para dar respuesta a una emergencia, las maneras de actuar y de recibir las ayudas humanitarias para resarcir a las personas que fueron afectadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/imagen-fuego-blanco.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo--banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1-nube.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2-fuego.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3-fuego2.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/imagen-casa-y-bombero.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación de incidentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Procedimientos',
            hash: 'procedimientos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evaluación de daños',
            hash: 'evaluacion-de-danos',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ayudas Humanitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de ayuda humanitaria',
            hash: 'tipos-de-ayuda-humanitaria',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ayuda Humanitaria de Emergencias',
            hash: 'ayuda-humanitaria-de-emergencias',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Puestos de mando',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características',
            hash: 'caracteristicas',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Flexibilidad',
            hash: 'flexibilidad-de-los-puestos-de-mando-unificado-PMU',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Herramientas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Criterios de operación',
            hash: 'criterios-de-operacion',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Manuales',
            hash: 'manuales',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estándares Humanitarios',
      referencia:
        'Ministerio de Salud. 2016. Guía Estándares Mínimos Humanitarios en Salud. Recuperado el 13/09/2022.',
      tipo: 'Guia',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/GT/guia-estandares-minimos-humanitarios-salud.pdf',
    },
    {
      tema: 'Kit de emergencias',
      referencia:
        'NC State Extension. 2021. Kit de Emergencia Familiar | Preparación para Desastres Naturales o Emergencias. YouTube. Recuperado el 21/10/2022.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=ljnRIz7HjgI',
    },
    {
      tema: 'Ayudas humanitarias',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres – Colombia. Estandarización de Ayuda Humanitaria de Colombia. Recuperado el 21/10/2022.',
      tipo: 'Guía',
      link:
        'https://portal.gestiondelriesgo.gov.co/Documents/Manuales/Manual_de_Estandarizacion_AHE_de_Colombia.pdf',
    },
    {
      tema: 'Señales seguridad',
      referencia:
        'Miss Lucero. Señales de Seguridad | Señales que salvan vidas | Miss Lucero. YouTube. 2020. Recuperado el 21/10/2022.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=SfApd0UrRos',
    },
  ],
  glosario: [
    {
      termino: 'Ayudas humanitarias',
      significado:
        'están diseñadas específicamente para alivianar el sufrimiento de las personas que fueron afectadas por un evento de desastre, por lo tanto, todas las acciones en pro de salvar vidas, prevenir emergencias, proteger y mantener la dignidad de los seres humanos serán de vital importancia para subsanar los daños provocados por la situación de emergencia.',
    },
    {
      termino: 'Ayuda de emergencia',
      significado:
        'es el resultante de una situación de emergencia la cual haya sido provocada por el hombre o por una catástrofe natural. Esta ayuda se diferencia entre ayuda y servicios materiales de emergencia, ayuda alimentaria de emergencia y coordinación de los servicios de protección de la ayuda.',
    },
    {
      termino: 'Botiquín',
      significado:
        'elemento destinado a contener los medicamentos y utensilios indispensables para brindar los primeros auxilios o para tratar dolencias comunes. La disponibilidad de un botiquín suele ser prescriptiva en áreas de trabajo para el auxilio de accidentados.',
    },
    {
      termino: 'Equipo de intervención',
      significado:
        'es aquel conjunto de recursos que son principalmente de la misma clase y tipo, es decir, que estén dentro del mismo alcance de control el cual tiene un solo líder y opera en un solo lugar.',
    },
    {
      termino: 'Evaluación de incidentes',
      significado:
        'proceso dinámico y cambiante frente a la situación que se genere día a día, por lo que debe adelantarse periódicamente mediante instrumentos que permitan confirmar las verdaderas necesidades de los sectores que se vieron afectados y determinar los aspectos cuantitativos y cualitativos de la catástrofe sanitaria.',
    },
    {
      termino:
        'Evaluación de daños y análisis de necesidades de salud en situaciones de desastre (EDAM)',
      significado:
        'está encaminada en la organización del sector de la salud, la cual abarca desde la conformación del comité de operaciones de emergencias hasta la sala de situación de salud; esta estructura se debe producir a nivel nacional, regional y local.',
    },
    {
      termino: 'Kit de emergencias',
      significado:
        'Es un maletín el cual debe ser organizado teniendo en cuenta todos los miembros de la familia, sus medicinas particulares y artículos de aseo. Un kit de emergencias debe permitir que una persona y su familia puedan sobrevivir como mínimo durante 72 horas.',
    },
    {
      termino: 'Sistema de Comandos de Incidentes (SCI)',
      significado:
        'es una organización estructurada la cual consiste en la combinación de instalaciones, equipamiento, personal, protocolos y procedimientos, con la responsabilidad de administrar de manera equitativa los recursos asignados para lograr el cumplimiento de los objetivos pertinentes de respuesta a un evento o incidente.',
    },
    {
      termino: 'Puesto de Mando Unificado (PMU)',
      significado:
        'es un lugar físico definido bajo ciertas características el cual ejerce la función de mando dentro de un evento de emergencia, es allí donde se concentra y coordina los diferentes asuntos operacionales que conciernen a un incidente o evento determinado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Minería. Zipaquirá junio 5 de 2014. Sistema de Comando de Incidentes. Tomado de internet el 12/09/2022',
      link:
        'https://www.anm.gov.co/sites/default/files/DocumentosAnm/sci_edgyflorez.pdf',
    },
    {
      referencia:
        'Alfaro, M.L (2016). US AID. Guía para orientar la implementación de un sistema de comando de incidentes en Latinoamérica y el caribe. Tomado de internet el 10/09/2022. ',
      link:
        'https://www.gob.mx/cms/uploads/attachment/file/724025/33_USAID_GOISCILC_2016_21.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. 2016. Guía Estándares Mínimos Humanitarios en Salud. Tomado de internet el 13/09/2022.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/GT/guia-estandares-minimos-humanitarios-salud.pdf',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. 2010. Evaluación de daños y analisis de necesidades de salud en situaciones de desastre. Tomado de internet el 11/09/2022.',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/711/ER_EDAN.pdf?sequence=1&isAllowed=y',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
