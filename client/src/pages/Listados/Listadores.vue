<template>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class= "row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in playas" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)" style="width: 45%">
          <img :src="item.imagen" style="height:300px">
            <q-card-section>
              <div class="text-h6">{{item.titulo}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
       </q-card>
    </div>
  </q-list>
</template>
<script>
export default {
  data () {
    return {
      playas: [
        {
          titulo: 'restaurante 1',
          descripcion: '',
          imagen: 'https://s1.eestatic.com/2020/03/12/cocinillas/actualidad-gastronomica/Coronavirus-Restaurantes-Actualidad_gastronomica_474214624_148088011_1706x960.jpg',
          ruta: ''
        },
        {
          titulo: 'restaurante 2',
          descripcion: '',
          imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/17/a0/e6/5f/restaurante-la-mariscada.jpg',
          ruta: ''
        },
        {
          titulo: 'restaurante 3',
          descripcion: '',
          imagen: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/edabfd68655805.5b6450c6b518a.jpg',
          ruta: ''
        },
        {
          titulo: 'restaurante 4',
          descripcion: '',
          imagen: 'https://www.cinconoticias.com/wp-content/uploads/restaurantes-famosos.jpg',
          ruta: ''
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
