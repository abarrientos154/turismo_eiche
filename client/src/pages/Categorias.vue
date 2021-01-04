<template>
<div>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class= "row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in opciones" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)" style="width: 45%">
          <img :src="item.imagen" style="height:300px">
            <q-card-section>
              <div class="text-h6">{{item.titulo}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
       </q-card>
    </div>
    <div class="column justify-center items-center bg-grey-3 ">
      <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
      </div>
  </q-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opciones: [],
      id: this.$route.params.id,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  },

  mounted () {
    this.verificarId()
    console.log(this.$router.params.id, 'revisa')
  },
  methods: {
    verificarId () {
      if (this.id === 'destinos') {
        this.opciones = [
          {
            titulo: 'Ciudad',
            descripcion: '',
            imagen: 'https://www.vuelaviajes.com/wp-content/2017/01/Santiago-de-Chile-destacada.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Ruinas y Lugares históricos',
            descripcion: '',
            imagen: 'https://radiochilena.cl/wp-content/uploads/2017/11/Palacio-de-la-Moneda-chile.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Playas',
            descripcion: '',
            imagen: 'https://enviajes.cl/wp-content/uploads/2014/11/Mejores-playas-de-Chile-Playa-Cavancha.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'hospedaje') {
        this.opciones = [
          {
            titulo: 'Ciudad',
            descripcion: '',
            imagen: 'https://www.vuelaviajes.com/wp-content/2017/01/Santiago-de-Chile-destacada.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Ruinas y Lugares históricos',
            descripcion: '',
            imagen: 'https://radiochilena.cl/wp-content/uploads/2017/11/Palacio-de-la-Moneda-chile.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'transporte') {
        this.opciones = [
          {
            titulo: 'Taxi',
            descripcion: '',
            imagen: 'https://ohmygeek.net/wp-content/uploads/2020/06/taxis-en-santiago-910x512.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Buses',
            descripcion: '',
            imagen: 'https://www.volvobuses.com.ar/content/dam/volvo/volvo-buses/markets/argentina/news/2020/1860x1050_Chile_C.jpg/_jcr_content/renditions/1860x1050_Chile_C-newsintro.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'actividades') {
        this.opciones = [
          {
            titulo: 'Paseos',
            descripcion: '',
            imagen: 'https://blog.doggiedoor.com.mx/wp-content/uploads/2014/11/dsc_6644-945x628.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Artesania',
            descripcion: '',
            imagen: 'https://www.nacion.com/resizer/YJSdTHKW80zMxdhCUTls6Ql38Zc=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/NMAHXC7FE5FP7PPGG2YPO4WKMA.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Trekking',
            descripcion: '',
            imagen: 'https://www.trekkingchile.com/es/wp-content/uploads/sites/4/2018/11/caminatas-de-chile.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Buceo',
            descripcion: '',
            imagen: 'https://www.revistaenfoque.cl/wp-content/uploads/2017/05/descubre-el-buceo-1.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Bodyboard y Surf',
            descripcion: '',
            imagen: 'https://tiendadesurf.cl/wp-content/uploads/2015/01/vitrine-prosutos2.jpg',
            ruta: '/detalle/playas'
          }
        ]
      }
    }
  }
}
</script>
