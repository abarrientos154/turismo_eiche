<template>
  <q-list bordered style="width: 550px" class="q-pa-md">
    <div class="row">
       <q-card  v-for="(item, index) in playas" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)">
          <img :src="item.imagen">
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
          titulo: 'playa 1',
          descripcion: '',
          imagen: 'https://i.pinimg.com/originals/ce/42/6b/ce426b41c00e71b35ee34752235bd35f.jpg',
          ruta: ''
        },
        {
          titulo: 'playa 2',
          descripcion: '',
          imagen: 'https://i.pinimg.com/originals/93/76/26/93762621af81e5c1cef6d7a8687f09fd.jpg',
          ruta: ''
        },
        {
          titulo: 'playa 3',
          descripcion: '',
          imagen: 'https://cuadrossplash.com/WebRoot/Store24/Shops/e4f1e2bd-2001-4b29-b1c7-2f79fbbb6256/5A5B/B169/918F/605A/2CF8/0A48/355B/E688/SPA1010_ml.jpeg',
          ruta: ''
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
