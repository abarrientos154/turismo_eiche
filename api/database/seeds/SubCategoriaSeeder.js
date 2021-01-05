'use strict'

/*
|--------------------------------------------------------------------------
| SubCategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const SubCategoria = use("App/Models/SubCategoria")
const data = [
  {
    id: 1,
    name: 'ciudad',
    categoria_id: 1,
    titulo: 'Ciudad',
    img: 'Aqui va la url de la imagen que va a mostrar en el front'
  }
]

class SubCategoriaSeeder {
  async run () {
    for (let i in data) {
      let subCategoria = await SubCategoria.findBy('id', data[i].id)
      if (!subCategoria) {
        await SubCategoria.create(data[i])
      } else {
        subCategoria.name = data[i].name
        subCategoria.titulo = data[i].titulo
        subCategoria.img = data[i].img
        subCategoria.categoria_id = data[i].categoria_id
        await subCategoria.save()
      }
    }
    console.log('Finished SubCategoria')
  }
}

module.exports = SubCategoriaSeeder
