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
    img: 'https://okdiario.com/img/2020/04/15/aprende-a-explorar-la-casa-con-los-ninos-durante-el-confinamiento.jpg'
  },
  {
    id: 2,
    name: 'restaurantes',
    titulo: 'Restaurantes y Pubs',
    img: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/11/SpiceMarket_cDanielAlvarez.jpg'
  },
  {
    id: 3,
    name: 'hospedaje',
    titulo: 'Hospedaje',
    img: 'https://i0.wp.com/escapesporelmundo.com/wp-content/uploads/2019/01/hotel-post-e1551840906962.png?fit=920%2C518&ssl=1'
  },
  {
    id: 4,
    name: 'servicios',
    titulo: 'Servicios de transporte',
    img: 'https://media.informabtl.com/wp-content/uploads/2019/12/4f38f069-servicio-de-transporte-privado.jpg'
  },
  {
    id: 5,
    name: 'actividades',
    titulo: 'Actividades',
    img: 'https://cucunver.com/blog/wp-content/uploads/2018/11/actividades_asociaciones.jpg'
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
