<template>
  <q-list bordered style="width: 550px" class="q-pa-md">
    <div class="row">
      <div class="q-pa-md row items-start q-gutter-md">
       <q-card  v-for="(item, index) in playas" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">
            <q-card-section>
              <div class="text-h6">{{item.titulo}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ lorem }}
            </q-card-section>
       </q-card>
      </div>
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
          imagen: '',
          ruta: ''
        },
        {
          titulo: 'playa 2',
          descripcion: '',
          imagen: ''
        },
        {
          titulo: 'playa 3',
          descripcion: '',
          imagen: ''
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
