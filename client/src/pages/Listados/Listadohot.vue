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
       <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
    </div>
  </q-list>

</template>
<script>
export default {
  data () {
    return {
      playas: [
        {
          titulo: 'Hotel 1',
          descripcion: '',
          imagen: 'https://orsmexico.files.wordpress.com/2013/02/bellagio-las-vegas.jpg',
          ruta: ''
        },
        {
          titulo: 'Hotel 2',
          descripcion: '',
          imagen: 'https://www.cronicaeconomica.com/imagenes/fotosdeldia/38663_nadal_y_lopetegui__una_sociedad_mercantil_desconocida_para_muchos.jpg',
          ruta: ''
        },
        {
          titulo: 'Hotel 3',
          descripcion: '',
          imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/11/5f/df/47/rgh-entrance-kensington.jpg',
          ruta: ''
        },
        {
          titulo: 'Hotel 4',
          descripcion: '',
          imagen: 'https://conozcasucanton.com/wp-content/uploads/sites/11/2016/07/springs-3.jpg',
          ruta: ''
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
