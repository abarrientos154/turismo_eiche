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
    <div class="full-width">
      <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" @newPlace="handleNewPlace" :withoutDirection="true" />
    </div>
  </q-card>
   <div class="column justify-center items-center">
      <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
    </div>
  </div>
</template>
<script>
import GoogleMap from '../../components/GoogleMap'
export default {
  components: {
    GoogleMap
  },
  data () {
    return {
      form: {},
      id: this.$route.params.id,
      markers: [],
      center: { lat: 10, lng: 10 }
    }
  },
  async mounted () {
    this.turismoId()
  },
  methods: {
    async turismoId () {
      await this.$api.get('detalle/' + this.id).then(res => {
        if (res) {
          this.form = res
          console.log(this.form, 'formmmm')
          this.center = this.form.ubicacion
          this.markers.push({
            title: this.form.nombre, // this.form.nombre,
            description: this.description,
            date_build: '',
            position: this.form.ubicacion
          })
        }
      })
    },
    getBounds (bounds, center) {
      console.log(center, 'center')
    },
    handleNewPlace (place, coordinates) {
      console.log('handleNewPlace', coordinates)
      this.form.ubicacion = coordinates
    }
  }
}

</script>
