<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
     <q-card  v-for="(item, index) in opciones" :key="index" clickable v-ripple class="bg-white" @click="$router.push('/detalle/:'+ _id)" style="width: 45%">
          <img :src="item.img" style="height:300px">
            <q-card-section>
              <div class="text-h6">{{item.nombre}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ item.descripcion }}
      </q-card-section>
       <q-rating v-model="item.puntuacion" max="5" size="3.5em" color="yellow" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
        <mapa  />
    </q-card>
      <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
   </div>
  </div>
</template>
<script>
import Mapa from '../../components/Mapa'
export default {
  components: {
    Mapa
  },
  data () {
    return {
      opciones: [],
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log(this.id, 'este es el id')
    this.turismoId()
  },
  methods: {
    turismoId () {
      this.$api.get('turis/' + this.id).then(res => {
        if (res) {
          this.opciones = res
        }
      })
    }
  }
}

</script>
