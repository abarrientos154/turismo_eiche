<template>
<div class="">
  <q-card class="bg-white full-width q-pa-xl q-ma-md shadow-3">
    <img :src="form.img" style="height:300px">
    <q-card-section>
      <div class="text-h6">{{form.nombre}}</div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ form.descripcion }}
    </q-card-section>
    <q-rating v-model="form.puntuacion" max="5" size="3.5em" color="yellow" disable icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
    <mapa :form="form" />
  </q-card>
   <div class="column justify-center items-center">
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
      form: {},
      id: this.$route.params.id
    }
  },
  mounted () {
    this.turismoId()
  },
  methods: {
    turismoId () {
      this.$api.get('detalle/' + this.id).then(res => {
        if (res) {
          this.form = res
          console.log(this.form, 'formmmm')
        }
      })
    }
  }
}

</script>
