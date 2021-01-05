'use strict'

/*
|--------------------------------------------------------------------------
| CategoriaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Categoria = use("App/Models/Categoria")
const data = [
  {
    id: 1,
    name: 'exploraD',
    titulo: 'Explora Destinos',
    img: 'Aqui va la url de la imagen'
  }
]

class CategoriaSeeder {
  async run () {
    for (let i in data) {
      let categoria = await Categoria.findBy('id', data[i].id)
      if (!categoria) {
        await Categoria.create(data[i])
      } else {
        categoria.name = data[i].name
        categoria.titulo = data[i].titulo
        categoria.img = data[i].img
        await categoria.save()
      }
    }
    console.log('Finished Categoria')
  }
}

module.exports = CategoriaSeeder
