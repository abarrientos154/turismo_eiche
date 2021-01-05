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
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 2,
    subCategoria_id: 1,
    nombre: 'Ruinas de Chile',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 3,
    subCategoria_id: 1,
    nombre: 'Playa de Chile',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
   {
    id: 4,
    subCategoria_id: 2,
    nombre: 'Restaurante de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 5,
    subCategoria_id: 3,
    nombre: 'Hotel de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
    }
  },
  {
    id: 6,
    subCategoria_id: 3,
    nombre: 'Residencia de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 7,
    subCategoria_id: 4,
    nombre: 'Taxi de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 8,
    subCategoria_id: 4,
    nombre: 'Bus de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 9,
    subCategoria_id: 5,
    nombre: 'Paseos de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 10,
    subCategoria_id: 5,
    nombre: 'Artesania de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766955,
      lng:-101.56502439607774
     }
    },
    {
    id: 11,
    subCategoria_id: 5,
    nombre: 'Trekking de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 12,
    subCategoria_id: 5,
    nombre: 'Buceo de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
    puntuacion: 2,
    descripcion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil at soluta possimus ipsa.',
    ubicacion: {
      lat:39.06381859766945,
      lng:-101.56402439607774
     }
    },
    {
    id: 13,
    subCategoria_id: 5,
    nombre: 'Bodyboard y Surf de Chile',
    numerocontact: '',
    direccion: '',
    correocontact: '',
    pagina: '',
    img: 'Aqui va la url de la imagen que va a mostrar en el front',
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
