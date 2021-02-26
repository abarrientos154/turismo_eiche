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
    titulo: 'categorias/exploradestinos2.png',
    label: 'Explora Destino',
    img: 'categorias/exploradestinos.png'
  },
  {
    id: 2,
    name: 'restaurantes',
    titulo: 'categorias/pubyrestaurantes2.png',
    label: 'Restaurantes y Pubs',
    img: 'categorias/pubsyresturants.jpg'
  },
  {
    id: 3,
    name: 'hospedaje',
    titulo: 'categorias/hospedaje2.png',
    label: 'Hospedaje',
    img: 'categorias/hospedaje.jpg'
  },
  {
    id: 4,
    name: 'servicios',
    titulo: 'categorias/taxi_y_buses_2.png',
    label: 'Servicios',
    img: 'categorias/taxisybuses.jpg'
  },
  {
    id: 5,
    name: 'actividades',
    titulo: 'categorias/paseos_nauticos_2.png',
    label: 'Actividades',
    img: 'categorias/paseosnauticos.jpg'
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
        categoria.label = data[i].label
        categoria.img = data[i].img
        await categoria.save()
      }
    }
    console.log('Finished Categoria')
  }
}

module.exports = CategoriaSeeder
