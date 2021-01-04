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
              {{ item.descripcion }}
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
      if (this.id === 'hoteles') {
        this.opciones = [
          {
            titulo: 'Hotel Sheraton Santiago',
            descripcion: 'Hotel de lujo con habitaciones y suites elegantes, 2 piscinas, un bar y 3 restaurantes.',
            imagen: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Austral View Hostel',
            descripcion: 'Dormitorio básico, habitaciones y cabañas en un albergue sencillo con desayuno y estacionamiento.',
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/47/eb/ea/getlstd-property-photo.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Sheraton Miramar',
            descripcion: 'Hotel de alta gama con habitaciones refinadas, restaurante informal, vistas al mar, spa y piscina cubierta.',
            imagen: 'https://static11.com-hotel.com/uploads/hotel/10610/photo/sheraton-miramar-hotel-convention-center_15518039883.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Radisson Blu Acqua Hotel & Spa Concon',
            descripcion: 'Hotel chic con centro de conferencias, 2 restaurantes, jacuzzi, gimnasio y piscinas cubierta y exterior.',
            imagen: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134916411.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'hospedaje') {
        this.opciones = [
          {
            titulo: 'Hotel Sheraton Santiago',
            descripcion: 'Hotel de lujo con habitaciones y suites elegantes, 2 piscinas, un bar y 3 restaurantes.',
            imagen: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Austral View Hostel',
            descripcion: 'Dormitorio básico, habitaciones y cabañas en un albergue sencillo con desayuno y estacionamiento.',
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/47/eb/ea/getlstd-property-photo.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Sheraton Miramar',
            descripcion: 'Hotel de alta gama con habitaciones refinadas, restaurante informal, vistas al mar, spa y piscina cubierta.',
            imagen: 'https://static11.com-hotel.com/uploads/hotel/10610/photo/sheraton-miramar-hotel-convention-center_15518039883.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Radisson Blu Acqua Hotel & Spa Concon',
            descripcion: 'Hotel chic con centro de conferencias, 2 restaurantes, jacuzzi, gimnasio y piscinas cubierta y exterior.',
            imagen: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134916411.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'transporte') {
        this.opciones = [
          {
            titulo: 'Hotel Sheraton Santiago',
            descripcion: 'Hotel de lujo con habitaciones y suites elegantes, 2 piscinas, un bar y 3 restaurantes.',
            imagen: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Austral View Hostel',
            descripcion: 'Dormitorio básico, habitaciones y cabañas en un albergue sencillo con desayuno y estacionamiento.',
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/47/eb/ea/getlstd-property-photo.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Sheraton Miramar',
            descripcion: 'Hotel de alta gama con habitaciones refinadas, restaurante informal, vistas al mar, spa y piscina cubierta.',
            imagen: 'https://static11.com-hotel.com/uploads/hotel/10610/photo/sheraton-miramar-hotel-convention-center_15518039883.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Radisson Blu Acqua Hotel & Spa Concon',
            descripcion: 'Hotel chic con centro de conferencias, 2 restaurantes, jacuzzi, gimnasio y piscinas cubierta y exterior.',
            imagen: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134916411.jpg',
            ruta: '/detalle/playas'
          }
        ]
      } else if (this.id === 'actividades') {
        this.opciones = [
          {
            titulo: 'Hotel Sheraton Santiago',
            descripcion: 'Hotel de lujo con habitaciones y suites elegantes, 2 piscinas, un bar y 3 restaurantes.',
            imagen: 'https://www.elinformadorchile.cl/wp-content/uploads/2020/09/253337782.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Austral View Hostel',
            descripcion: 'Dormitorio básico, habitaciones y cabañas en un albergue sencillo con desayuno y estacionamiento.',
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/47/eb/ea/getlstd-property-photo.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Sheraton Miramar',
            descripcion: 'Hotel de alta gama con habitaciones refinadas, restaurante informal, vistas al mar, spa y piscina cubierta.',
            imagen: 'https://static11.com-hotel.com/uploads/hotel/10610/photo/sheraton-miramar-hotel-convention-center_15518039883.jpg',
            ruta: '/detalle/playas'
          },
          {
            titulo: 'Radisson Blu Acqua Hotel & Spa Concon',
            descripcion: 'Hotel chic con centro de conferencias, 2 restaurantes, jacuzzi, gimnasio y piscinas cubierta y exterior.',
            imagen: 'https://cf.bstatic.com/images/hotel/max1024x768/134/134916411.jpg',
            ruta: '/detalle/playas'
          }
        ]
      }
    }
  }
}
</script>
