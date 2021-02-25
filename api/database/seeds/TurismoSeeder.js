'use strict'

/*
|--------------------------------------------------------------------------
| TurismoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Turismo = use("App/Models/Turismo")
const data = [
  {
    id: 1,
    subCategoria_id: 3,
    nombre: 'PUNTA CUARTEL',
    img: 'playas/PUNTA CUARTEL.png',
    puntuacion: 0,
    descripcion: 'Ubicada a 8 km de la comuna, Punta rieles cuenta con hermosas playas. Escondida bajo el sector de Punta Angamos. Se caracteriza por poseer blancas arenas y aguas cristalinas'
  },
  {
    id: 2,
    subCategoria_id: 3,
    nombre: 'PLAYA LA RINCONADA',
    img: 'playas/PLAYA LA RINCONADA.png',
    puntuacion: 0,
    descripcion: 'Localizada a 3,5 Km al oeste de Mejillones y situada en las faldas del cerro San Luciano. Playa de arenas Blancas y de tranquilas aguas'
  },
  {
    id: 3,
    subCategoria_id: 3,
    nombre: 'BALNEARIOS / CAP. DE PUERTO / GUANAYE',
    img: 'playas/PLAYA BALNEARIO.png',
    puntuacion: 0,
    descripcion: 'Playas populares centro de la bahía de Mejillones cercanas a muelle pesquero y Plaza de los eventos playas que cuentan con todo servicio a su disposición.'
  },
  {
    id: 4,
    subCategoria_id: 3,
    nombre: 'CHACAYA',
    img: 'playas/CHACAYA.png',
    puntuacion: 0,
    descripcion: 'Localizada a 30 Km al norte de Mejillones a través de la ruta B-262. Posee un hermoso paisaje y es perfecta para realizar deportes náuticos y pesca deportiva.'
  },
  {
    id: 5,
    subCategoria_id: 3,
    nombre: 'PLAYA GRANDE',
    img: 'playas/PLAYA GRANDE.png',
    puntuacion: 0,
    descripcion: 'Localizada a 25 Km al norte de Mejillones. Playas de Gran extensión con fina arena'
  },
  {
    id: 6,
    subCategoria_id: 3,
    nombre: 'PUNTA ITATA',
    img: 'playas/PUNTA ITATA.png',
    puntuacion: 0,
    descripcion: 'se emplaza a 32 km al norte de Mejillones. Pequeño balneario de aguas cálidas.'
  },
  {
    id: 7,
    subCategoria_id: 3,
    nombre: 'HORNITOS',
    img: 'playas/HORNITOS.png',
    puntuacion: 0,
    descripcion: 'Situada a 36 Km al norte de Mejillones es uno de los mejores balnearios turísticos de la región.'
  },
  {
    id: 8,
    subCategoria_id: 2,
    nombre: 'CEMENTERIO  MUNICIPAL ',
    img: 'ruinasylugaresh/CEMENTERIO MUNICIPAL.png',
    puntuacion: 0,
    descripcion: `
    *  AÑO DE CONSTRUCCIÓN: 1913
    Con fecha 28 de Julio de 1913, se aceptó por parte del Ministerio de la Industria y Obras Públicas con el Decreto Nº 1440, la propuesta del contratista LISANDRO ALVAREZ para llevar a cabo los trabajos de construcción de la portada y cierre del Cementerio de Mejillones por la suma de $ 77.000 y con un plazo de siete meses para terminar las obras.
    El diseño de la portada le correspondió al  Arquitecto  Don LEONELLO BOTACCI.
    Las obras se concluyeron recién durante el mes de Julio de 1916.
    *  DESCRIPCIÓN ARQUITECTÓNICA
    Principalmente la descripción corresponde a la construcción de la portada del Cementerio, realizada enteramente en concreto. Su diseño arquitectónico determina una simetría rígida con dos dependencias laterales separadas por una cúpula esférica que le da al diseño una especial característica de estilo neoclásico con influencias europeas.
    Los muros circundantes se confeccionaron enteramente en concreto y se encuentran en excelentes condiciones, sin que hayan mayores modificaciones al diseño original.
    `
  },
  {
    id: 9,
    subCategoria_id: 2,
    nombre: 'HITO PARALELO 23',
    img: 'ruinasylugaresh/HITO PARALELO 23.png',
    puntuacion: 0,
    descripcion: `
    Hubo un tiempo en que Chile llegaba hasta Mejillones. Aún se mantiene altivo el hito construido para decir “hasta acá llega Chile”. Tal hito es un verdadero monumento histórico que yace oculto y olvidado en el desierto norte de nuestra comuna. Y el tiempo en que Mejillones fue la frontera norte de Chile fueron años decisivos en la historia de nuestro país. Décadas que desembocaron en una guerra por la posesión del Desierto de Atacama. A fines de la década de 1830 se descubre guano blanco en
    la Península de Mejillones. El empresario francés Domingo Latrille comienza su explotación, planteándose por primera vez el tema de los límites. Hasta el momento era “tierra de nadie”. Chile alegaba la pertenencia del “despoblado de Atacama” mientras que Bolivia reclamaba que su jurisdicción se prolongaba hasta Coquimbo. Sólo cinco años después –en 1862- nacería Mejillones. En esa fecha el empresario chileno Juan López descubre un cuantioso yacimiento de guano rojo en el Morro de Mejillones. Esto obliga al nacimiento de un pueblo.
    `
  },
  {
    id: 10,
    subCategoria_id: 2,
    nombre: 'IGLESIA CORAZÓN DE MARIA ',
    img: 'ruinasylugaresh/IGLESIA CORAZÓN DE MARIA.png',
    puntuacion: 0,
    descripcion: `
    AÑO DE CONSTRUCCIÓN: 1907
    En abril de 1907 la Dirección de Obras Públicas, procedió a formar los proyectos de edificios públicos de Mejillones, entre ellos los del Templo Católico de acuerdo a lo dispuesto en la Ley 1829 del 7 de Febrero de 1906.
    trabajo del Arquitecto ONOFRE MONTANE U.
    DESCRIPCIÓN ARQUITECTÓNICA
    Construcción enteramente de madera de pino oregón. Construcción alzada en un piso y emplazada al vértice noreste del sitio. Adosado al cuerpo principal, se ubican las oficinas parroquiales y Casa del Párroco que complementan la fachada.
    `
  },
  {
    id: 11,
    subCategoria_id: 2,
    nombre: 'DELEGACION MUNICIPAL',
    img: 'ruinasylugaresh/DELEGACION MUNICIPAL.png',
    puntuacion: 0,
    descripcion: `
    AÑO DE CONSTRUCCIÓN 1909
    Mejillones, quedó como Subdelegación dependiente de la Comuna de Antofagasta y por ello,  el 4 de Enero de 1957 y se instalara la Primera Municipalidad el 4 de Marzo de ese mismo año.

    `
  },
  {
    id: 12,
    subCategoria_id: 2,
    nombre: 'CAPITANIA DE PUERTO',
    img: 'ruinasylugaresh/CAPITANIA DE PUERTO.png',
    puntuacion: 0,
    descripcion: `
    Su construcción data de 1910 y se enmarca dentro del plano de la nueva ciudad de Mejillones. Los planos del edificio se atribuyen al Arquitecto Leonello Bottacci. Considerado para labores de control marítimo,   Está ubicada en el borde costero.  Su construcción se alza en dos pisos y su frontis  apunta directamente al Pacífico.
    `
  },
  {
    id: 13,
    subCategoria_id: 2,
    nombre: 'PLAZA DEL FERROVIARIO',
    img: 'ruinasylugaresh/PLAZA DEL FERROVIARIO.png',
    puntuacion: 0,
    descripcion: `
    la Locomotora a vapor Nº 22 de FCAB fue trasladada en 1971, posteriormente en 1976 se  inauguro el Monumento el Trabajador Ferroviario.
    `
  },
  {
    id: 14,
    subCategoria_id: 2,
    nombre: 'CASONA SUB DELEGACION',
    img: 'ruinasylugaresh/CASONA SUB DELEGACION.png',
    puntuacion: 0,
    descripcion: `
    *  AÑO DE CONSTRUCCIÓN: 1909
    Mejillones, no siendo una localidad políticamente definida quedó como Subdelegación dependiente de la Comuna de Antofagasta  una de las autoridades más importantes fue el Juez de Subdelegación.
    *  DESCRIPCIÓN ARQUITECTÓNICA
    De estilo típico neoclásico inglés, construcción  mixta estructurada con vigas y pilares de madera de pino oregón y muros de paneles prefabricados de concreto. Su construcción está alzada en dos pisos, sus ornamentos (adornos de fachada) se destacan pro las aplicaciones en las cornisas y frontones superiores que se muestran hacia los exteriores, reafirmando así el estilo de la influencia europea. Su diseño esta basado en dos bloques que identifican el primer piso del segundo, los cuales hacían diferenciar las oficinas del Juzgado con las dependencias destinadas a la casa del Juez.
    `
  },
  {
    id: 15,
    subCategoria_id: 2,
    nombre: 'MUSEO HISTORICO MEJILLONES',
    img: 'ruinasylugaresh/MUSEO HISTORICO MEJILLONES.png',
    puntuacion: 0,
    descripcion: `
    El Museo Municipal de Mejillones se encuentra emplazado en un edificio de Conservación Histórica, construido originalmente como servicio de Aduana en el año 1909. Construcción en su totalidad de pino Oregón. En 1997 se habilita como Museo albergando en su interior la Historia de Mejillones.
    `
  },
  {
    id: 16,
    subCategoria_id: 2,
    nombre: 'MUNICIPALIDAD DE MEJILLONES',
    img: 'ruinasylugaresh/MUNICIPALIDAD DE MEJILLONES.png',
    puntuacion: 0,
    descripcion: `
    Fue destinada como   casa del Teniente de Aduana.
    Construido en 1909
    Diseño del arquitecto Luis Jacob, proyectada por el Ingeniero Emilio de Vidts y  ejecutada en 1906
    `
  },
  {
    id: 17,
    subCategoria_id: 2,
    nombre: 'ESTACION DE FERROCARRIL',
    img: 'ruinasylugaresh/ESTACION DE FERROCARRIL.png',
    puntuacion: 0,
    descripcion: `
        AÑO DE CONSTRUCCIÓN: 1906
    La instalación de la empresa de ferrocarril constituye el hito histórico mas relevante que tenga relación con la fundación del pueblo y Puerto de Mejillones.

    El 11 de Octubre de 1904 con el Decreto Nº 2102 se concedió la construcción y el 7 de Febrero de 1906 se promulgó la Ley 1829 que declaró la utilidad pública los terrenos para el ferrocarril y los del pueblo. La estación ferroviaria fue quizás el primer edificio levantado para el tal efecto.

    DESCRIPCIÓN ARQUITECTÓNICA
    Modelo casi estandarizado por le empresa del Ferrocarril para sus estaciones de pasajeros construidas en toda la línea de la pampa Antofagastina a principios del siglo XX y a su vez de estilo típico para las construcciones industriales de la época salitrera.
    Construcción enteramente en madera de pino oregón.
    `
  },
  {
    id: 18,
    subCategoria_id: 4,
    nombre: 'RESTAURANTE TITO COBREOLA',
    img: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/53912481_10219097339965652_7571177334460383232_n.jpg?_nc_cat=108&ccb=3&_nc_sid=8bfeb9&_nc_ohc=EjoDHXu4TH8AX-G_GiV&_nc_ht=scontent-mia3-1.xx&oh=772e121031f05641e230af19ae78773e&oe=605B0AA8',
    puntuacion: 0,
    direccion: 'AV. SAN MARTIN 526, MEJILLONES CHILE ',
    descripcion: `
    COMIDA CHILENA Y SUBAMERICANA
    `
  },
  {
    id: 19,
    subCategoria_id: 4,
    nombre: 'ESPACIO LIBERO',
    img: 'https://www.chilegastronomia.cl/uploads/contenido/contenido_galeria/carousel_89f96f37c709d68fe319b7245962c50af72900b3.jpg',
    puntuacion: 0,
    direccion: 'PASAJE LENIZ 115, ESQUINA SAN MARTIN, MEJILLONES 1240000 CHILE ',
    numerocontact: '+56998905044/  +56977932176',
    correocontact: 'reserva.espaciolibero@gmail.com',
    descripcion: `
    BAR, PIZZERIA, CAFÉ Y PUB.
    `
  },
  {
    id: 20,
    subCategoria_id: 4,
    nombre: 'RUSTIC RESTOBAR AC',
    img: 'https://i.imgur.com/m4bY4A3.png',
    puntuacion: 0,
    direccion: 'AV SAN MARTIN 776, 1310000 MEJILLONES',
    numerocontact: '+56940162705',
    descripcion: `
    BAR.
    `
  },
  {
    id: 21,
    subCategoria_id: 4,
    nombre: 'SABORES DE CAMPO',
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/51584440_344541473067209_6422531353832587264_o.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=du2iJbcodYQAX9OdZcK&_nc_ht=scontent-mia3-2.xx&oh=79bac888e9e1d84235f9e9217f430ffd&oe=605B8C71',
    puntuacion: 0,
    direccion: 'ANDALICAN 955, 1240000 MEJILLONES',
    numerocontact: '+5661638211',

  },
  {
    id: 22,
    subCategoria_id: 4,
    nombre: 'LA ROCA',
    img: 'https://www.todoantofagasta.cl/wp-content/gallery/la-roca/foto-plato-2-derecha-inicio.jpg',
    puntuacion: 0,
    direccion: 'ANDALICAN 444, MEJILLONES, REGION DE ANTOFAGASTA',
    numerocontact: '+56965573942',
    descripcion: 'GASTRONOMIA PERUANA',
    correocontact: 'yeralva_@hotmail.com'
  },
  {
    id: 23,
    subCategoria_id: 4,
    nombre: 'RESTO BAR ESPINAKEITOR',
    img: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/38471704_2132618183662063_180377360732782592_n.jpg?_nc_cat=111&ccb=3&_nc_sid=0debeb&_nc_ohc=t8Nu7ALj4ocAX9EJQLE&_nc_ht=scontent-mia3-1.xx&oh=59b5907aba14f70d5b3c56bc3c39ceb0&oe=6058F7E4',
    puntuacion: 0,
    direccion: 'AV. B.O HIGGINS #306, 1240000, MEJILLONES',
    numerocontact: '+56965573942',
    descripcion: 'BAR',
    pagina: 'https://www.espinakeitor.cl/'
  },
  {
    id: 24,
    subCategoria_id: 4,
    nombre: 'EMPANAPOLIX',
    img: 'https://lh3.googleusercontent.com/p/AF1QipOMmUVlHHnzixKvdOWW2FNnz6wXrQOairHNCNnq=w600-k',
    puntuacion: 0,
    direccion: 'RIQUELME 456, MEJILLONES 1318101, CHILE',
    numerocontact: '+56552622493',
    correocontact: 'empanapolix.mejillones@gmail.com ',
    descripcion: 'COMIDA CHILENA, SUDAMERICANA Y APTO PARA VEGETARIANOS',
  },
  {
    id: 25,
    subCategoria_id: 4,
    nombre: 'RUMPHAY RUMPHAY',
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/140680240_244254597158845_2615801593741024886_o.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_ohc=dwnMsItQdRIAX_H57jv&_nc_ht=scontent-mia3-2.xx&oh=d3a66856d90a6f5e5f89bfd1fc05dd55&oe=60599F5B',
    puntuacion: 0,
    direccion: 'MEJILLONES, ANTOFAGASTA, CHILE ',
  },
  {
    id: 26,
    subCategoria_id: 4,
    nombre: 'RESTAURANTE CASINO MUNICIPAL MEJILLONES',
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/75/c6/4a/ceviche-tipo-chileno.jpg',
    puntuacion: 0,
    direccion: 'ARTURO PRAT S/N CASINO MUNICIPAL DE MEJILLONES, MEJILLONES CHILE ',
    numerocontact:'+56552622493',
    descripcion:'MASRISCOS Y COMIDA CHILENA',
    correocontact:'eventos@inversionespukara.cl',
    pagina:'https://www.inversionespukara.cl/'
  },
  {
    id: 27,
    subCategoria_id: 5,
    nombre: 'HOTEL ALTO DEL SOL',
    img: 'https://cf.bstatic.com/images/hotel/max1024x768/767/76766722.jpg',
    puntuacion: 0,
    direccion: 'MEJILLONES PASAJE GOÑI#238',
    numerocontact:'56522526597',
    pagina:'https://hotelaltodelsol.com'
  },
  {
    id: 28,
    subCategoria_id: 5,
    nombre: 'HOTEL H&H',
    img: 'https://irp-cdn.multiscreensite.com/4e87a16c/MOBILE/jpg/2219273-20191101_142703-aab327ba6.jpg?v=7.3.45002',
    puntuacion: 0,
    direccion: 'ONGOLMO 575- MEJILLONES, REGION DE ANGOFAGASTA ',
    numerocontact:'552621682/ 987254711',
    correocontact: 'hotelhyhmejillones@gmail.com'
  },
  {
    id: 29,
    subCategoria_id: 5,
    nombre: 'HOTEL PARIS',
    img: 'https://lh3.googleusercontent.com/p/AF1QipPyGJDSs-OLYveM73y0oi6CZsHfiTy37TSbYeao=w600-k',
    puntuacion: 0,
    direccion: 'PASAJE IQUIQUE 095 MEJILLONES, ANTOFAGASTA, REGION ANTOFAGASTA ',
    descripcion: 'BAÑO PRIVADO, DESAYUNO, ESTACIONAMIENTO. TV CABLE',
    numerocontact:'055262306',
  },
  {
    id: 30,
    subCategoria_id: 5,
    nombre: 'HOTEL MIRAMAR ',
    img: 'https://cf.bstatic.com/images/hotel/max1280x900/976/97662291.jpg',
    puntuacion: 0,
    direccion: 'SAN MARTIN 650, MEJILLONES, CHILE ',
    descripcion: 'TV CABLE, WIFI, SERVICIO DE ALIMENTACION',
    numerocontact:'+55-2621 638',
    correocontact: ' contacto@hotelmiramarmejillones.cl',
    pagina:'http://www.hotelmiramarmejillones.cl/'
  },
  {
    id: 31,
    subCategoria_id: 5,
    nombre: 'APARTA HOTEL RAPALLO',
    img: 'https://www.aparthotelrapallo.cl/img/03.jpg',
    puntuacion: 0,
    direccion: 'MATIAS COUSIÑO #068, MEJILLONES- II REGION- CHILE ',
    descripcion: 'GENERADOR ELECTRICO, ALOJAMIENTO (DIARIO, SEMANAL O MENSUAL), SERVICIO DE LAVANDERIA, WIFI, ESTACIONAMIENTO, TELEFONO EN HABITACIÓN, TV CABLE, SERVICIO DE MUCAMA, COCINA AMERICANA EQUIPADA, CONFORTABLES DEPARTAMENTOS',
    numerocontact:'(055) 262 32 93',
    pagina:'https://www.aparthotelrapallo.cl/'
  },
  {
    id: 32,
    subCategoria_id: 5,
    nombre: 'APARTAHOTEL BAHIA ',
    img: 'http://www.aparthotelbahia.cl/img/bahia02.jpg',
    puntuacion: 0,
    direccion: 'PASAJE COVADONGA 083 MEJILLONES, CHILE',
    descripcion: 'GENERADOR ELECTRICO,LAVANDERIA, WIFI, ESTACIONAMIENTO, ASISTENCIA SECRETARIAL, TV CABLE, SERVICIO DE MUCAMA.',
    numerocontact:'+56552622385',
  },
  {
    id: 33,
    subCategoria_id: 5,
    nombre: 'HOTEL MEJILLONES',
    img: 'https://cf.bstatic.com/images/hotel/max1280x900/443/44377715.jpg',
    puntuacion: 0,
    direccion: 'UBICADO FRENTE DEL OCEANO PACIFICO Y DE LA CIUDAD A 64 KILOMETROS DE ANTOFAGASTA A 35 KILOMETROS DEL AEROPUERTO CERRO MORENO',
    descripcion: 'DESAYUNO Y CENA EN COMEDOR CON UNA HERMOSA VISTA A LA BAHIA, TV CABLE, WIFI, ESTACIONAMIENTO PRIVADO, SALA DE ESTAR CON DIRECTV HD, LAVANDERIA',
    numerocontact:'055 – 2555149; 055- 2555186',
    correocontact: 'reservas@hotelmejillones.cl',
    pagina:'https://hotelmejillones.cl/'
  },
  {
    id: 34,
    subCategoria_id: 7,
    nombre: 'PUNTA ANGAMOS',
    img: 'https://gpsmonitoreosatelital.com/img/taxi.png',
    puntuacion: 0,
    descripcion: 'TAXI',
    numerocontact:'+56552622020',
  },
  {
    id: 35,
    subCategoria_id: 7,
    nombre: 'TAXI MEJILLONES',
    img: 'https://www.enac.es/documents/7020/b05c15c5-25b0-4fd1-ba60-cd45723286fe',
    puntuacion: 0,
    descripcion: 'TAXI',
    numerocontact:'+56552623107',
  },
  {
    id: 36,
    subCategoria_id: 7,
    nombre: 'TAXI CENTRAL',
    img: 'http://www.radiotaximankel.cl/assets/images/comp-taxi-mankel-color-1920x1280.jpg',
    puntuacion: 0,
    descripcion: 'TAXI',
    numerocontact:'+56552623040',
  },
  {
    id: 37,
    subCategoria_id: 8,
    nombre: 'BUSES BIAGGINI',
    img: 'https://fastly.4sqi.net/img/general/600x600/44562458_KTQF8hd9vy0kqY0vT9NFkXh5Kq7C_Q-boVCTNLQCTOc.jpg',
    puntuacion: 0,
    descripcion: 'BUSES',
  },
  {
    id: 38,
    subCategoria_id: 8,
    nombre: 'BUSES COBREMAR',
    img: 'https://px.cdn.lanueva.com/052017/1511598826687.jpg',
    puntuacion: 0,
    descripcion: 'BUSES',
  },
  {
    id: 39,
    subCategoria_id: 9,
    nombre: 'TURISMO JM',
    img: 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/11143534_615509668550127_2695121595245141743_n.jpg?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=64-V8D7_-1kAX-LPAvF&_nc_ht=scontent-mia3-2.xx&oh=473868a5e87ccc7e2d8b06833b834046&oe=605A93ED',
    puntuacion: 0,
    numerocontact: '+56991451663',
    correocontact:'turismojm@gmail.com',
  },

  /* {
    id: 1,
    subCategoria_id: 1,
    nombre: 'Ciudad de Chile',
    img: 'https://www.vuelaviajes.com/wp-content/2017/01/Santiago-de-Chile-destacada.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 2,
    subCategoria_id: 2,
    nombre: 'Ruinas de Chile',
    img: 'https://radiochilena.cl/wp-content/uploads/2017/11/Palacio-de-la-Moneda-chile.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 3,
    subCategoria_id: 3,
    nombre: 'Playa de Chile',
    img: 'https://enviajes.cl/wp-content/uploads/2014/11/Mejores-playas-de-Chile-Playa-Cavancha.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
   {
    id: 4,
    subCategoria_id: 4,
    nombre: 'Restaurante de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/11/SpiceMarket_cDanielAlvarez.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 5,
    subCategoria_id: 5,
    nombre: 'Hotel de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 6,
    subCategoria_id: 6,
    nombre: 'Residencia de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/175180529.jpg?k=b28fe8177867bda800b5466f960ddd9b80c5c6282f52d18834232dfe6aa6fcf6&o=',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 7,
    subCategoria_id: 7,
    nombre: 'Taxi de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://ohmygeek.net/wp-content/uploads/2020/06/taxis-en-santiago-910x512.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 8,
    subCategoria_id: 8,
    nombre: 'Bus de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://www.volvobuses.com.ar/content/dam/volvo/volvo-buses/markets/argentina/news/2020/1860x1050_Chile_C.jpg/_jcr_content/renditions/1860x1050_Chile_C-newsintro.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 9,
    subCategoria_id: 9,
    nombre: 'Paseos de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://blog.doggiedoor.com.mx/wp-content/uploads/2014/11/dsc_6644-945x628.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 10,
    subCategoria_id: 10,
    nombre: 'Artesania de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://www.nacion.com/resizer/YJSdTHKW80zMxdhCUTls6Ql38Zc=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/NMAHXC7FE5FP7PPGG2YPO4WKMA.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766955,
      lng:-101.56502439607774
     }
    },
    {
    id: 11,
    subCategoria_id: 11,
    nombre: 'Trekking de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://www.trekkingchile.com/es/wp-content/uploads/sites/4/2018/11/caminatas-de-chile.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 12,
    subCategoria_id: 12,
    nombre: 'Buceo de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://www.revistaenfoque.cl/wp-content/uploads/2017/05/descubre-el-buceo-1.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 13,
    subCategoria_id: 13,
    nombre: 'Bodyboard y Surf de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'https://tiendadesurf.cl/wp-content/uploads/2015/01/vitrine-prosutos2.jpg',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    } */
]

class TurismoSeeder {
  async run () {
    for (let i in data) {
      let turismo = await Turismo.findBy('id', data[i].id)
      if (!turismo) {
        await Turismo.create(data[i])
      } else {
        await Turismo.query().where('id', data[i].id).update(data[i])
      }
    }
    console.log('Finished SubCategoria')
  }
}

module.exports = TurismoSeeder
