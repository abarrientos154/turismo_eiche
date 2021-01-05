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
    img: 'https://www.vuelaviajes.com/wp-content/2017/01/Santiago-de-Chile-destacada.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 2,
    name: 'ruinas',
    categoria_id: 1,
    titulo: 'Ruinas y Lugares históricos',
    img: 'https://radiochilena.cl/wp-content/uploads/2017/11/Palacio-de-la-Moneda-chile.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 3,
    name: 'playas',
    categoria_id: 1,
    titulo: 'Playas',
    img: 'https://enviajes.cl/wp-content/uploads/2014/11/Mejores-playas-de-Chile-Playa-Cavancha.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 4,
    name: 'restaurantes',
    categoria_id: 2,
    titulo: 'Restaurantes y Pubs',
    img: 'https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/11/SpiceMarket_cDanielAlvarez.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 5,
    name: 'hotelería',
    categoria_id: 3,
    titulo: 'Hotelería',
    img: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 6,
    name: 'residencias',
    categoria_id: 3,
    titulo: 'Residénciales y hostales',
    img: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/175180529.jpg?k=b28fe8177867bda800b5466f960ddd9b80c5c6282f52d18834232dfe6aa6fcf6&o=',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 7,
    name: 'taxi',
    categoria_id: 4,
    titulo: 'Taxi',
    img: 'https://ohmygeek.net/wp-content/uploads/2020/06/taxis-en-santiago-910x512.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 8,
    name: 'buses',
    categoria_id: 4,
    titulo: 'Buses',
    img: 'https://www.volvobuses.com.ar/content/dam/volvo/volvo-buses/markets/argentina/news/2020/1860x1050_Chile_C.jpg/_jcr_content/renditions/1860x1050_Chile_C-newsintro.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 9,
    name: 'paseos',
    categoria_id: 5,
    titulo: 'Paseos',
    img: 'https://blog.doggiedoor.com.mx/wp-content/uploads/2014/11/dsc_6644-945x628.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 10,
    name: 'artesania',
    categoria_id: 5,
    titulo: 'Artesania',
    img: 'https://www.nacion.com/resizer/YJSdTHKW80zMxdhCUTls6Ql38Zc=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/NMAHXC7FE5FP7PPGG2YPO4WKMA.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 11,
    name: 'trekking',
    categoria_id: 5,
    titulo: 'Trekking',
    img: 'https://www.trekkingchile.com/es/wp-content/uploads/sites/4/2018/11/caminatas-de-chile.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 12,
    name: 'buceo',
    categoria_id: 5,
    titulo: 'Buceo',
    img: 'https://www.revistaenfoque.cl/wp-content/uploads/2017/05/descubre-el-buceo-1.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
  {
    id: 13,
    name: 'bodyboard',
    categoria_id: 5,
    titulo: 'Bodyboard y Surf',
    img: 'https://tiendadesurf.cl/wp-content/uploads/2015/01/vitrine-prosutos2.jpg',
    descripcion:'Lorem ipsum dolor sit amet'

  },
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
