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
          titulo: 'Turismo 1',
          descripcion: '',
          imagen: 'https://altavistaclub.com/blog/wp-content/uploads/2019/01/Coliseo-Romano.jpeg',
          ruta: '/detalle/turismo'
        },
        {
          titulo: 'Turismo 2',
          descripcion: '',
          imagen: 'https://media.iatiseguros.com/wp-content/uploads/2018/08/04005842/maravillas-del-mundo-7.jpg',
          ruta: '/detalle/turismo'
        },
        {
          titulo: 'Turismo 3',
          descripcion: '',
          imagen: 'https://d36tnp772eyphs.cloudfront.net/blogs/2/2019/02/The-Taj-Mahal-940x623.jpg',
          ruta: '/detalle/turismo'
        },
        {
          titulo: 'Turismo 4',
          descripcion: '',
          imagen: 'https://cflvdg.avoz.es/default/2018/07/26/00121532606365478164256/Foto/4.jpg',
          ruta: '/detalle/turismo'
        }
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
