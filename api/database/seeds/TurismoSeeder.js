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
      id: 14,
      subCategoria_id: 1,
      nombre: 'Ciudad de Caracas',
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
    }
]

class TurismoSeeder {
  async run () {
    for (let i in data) {
      let turismo = await Turismo.findBy('id', data[i].id)
      if (!turismo) {
        await Turismo.create(data[i])
      } else {
        turismo.subCategoria_id = data[i].subCategoria_id
        turismo.nombre = data[i].nombre
        turismo.img = data[i].img
        turismo.puntuacion = data[i].puntuacion
        turismo.descripcion = data[i].descripcion
        turismo.ubicacion = data[i].ubicacion
        turismo.numerocontact = data[i].numerocontact
        turismo.direccion = data[i].direccion
        turismo.correocontact = data[i].correocontact
        turismo.pagina = data[i].pagina
        await turismo.save()
      }
    }
    console.log('Finished SubCategoria')
  }
}

module.exports = TurismoSeeder
