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
    titulo: 'Ciudad de Chile',
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
        turismo.titulo = data[i].titulo
        turismo.img = data[i].img
        turismo.puntuacion = data[i].puntuacion
        turismo.descripcion = data[i].descripcion
        turismo.ubicacion = data[i].ubicacion
        await turismo.save()
      }
    }
    console.log('Finished SubCategoria')
  }
}

module.exports = TurismoSeeder
