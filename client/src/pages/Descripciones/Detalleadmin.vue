<template>
<div class="q-pa-md">
    <q-card class="bg-white full-width q-pa-xl q-ma-md shadow-3">
      <img :src="form.img ? form.img : baseu + form.images[0]" style="height:300px">
        <q-card-section>
          <div class="text-h6">{{form.nombre}}</div>
        </q-card-section>
          <div class="q-pa-md text-h7 text-grey-9 text-bold">Descripcion del lugar:</div>
            <q-card-section class="q-pt-none">
              {{ form.descripcion }}
            </q-card-section>
              <q-card v-if="form.habilitarH === true" class="q-pa-none" >
                  <div class="q-pa-md text-h7 text-grey-9 text-bold">Abierto:</div>
                  <q-card-section class="row q-pa-none">
                  <div v-for="(item, index) in form.diastrabajo" :key="index" class="q-ml-md text-h7">{{item}}</div>
                  </q-card-section>
                  <q-card-section >
                  <div class="q-pa-none text-h7 text-grey-9 text-bold">Horario del lugar:</div>
                    <div class="text-h7">{{form.tiempoinicio}}-{{form.tiempofinal}}</div>
                  </q-card-section>
              </q-card>
              <div class="q-ml-md text-h7 text-grey-9 text-bold">Popularidad del lugar:</div>
                <q-rating class="q-pa-sm" v-model="form.puntuacion" max="5" size="3.5em" color="yellow" disable icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
                  <div class="full-width">
                    <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" @newPlace="handleNewPlace" :withoutDirection="true" />
                  </div>

              <q-card class="bg-white full-width q-pa-xl q-ma-md shadow-3">
                <div class="q-ml-md text-h6 text-grey-9 text-bold">Comentarios</div>
                  <div class="q-mb-md q-mt-md" v-if="data.length > 0">
                    <q-list class="q-mt-sm q-mb-lg">
                      <div v-for="(item, index) in data" :key="index">
                        <q-item class="q-mt-md">
                          <q-item-section top avatar>
                            <q-avatar >
                              <q-img :src="item.img" />
                            </q-avatar>
                          </q-item-section>
                          <q-item-section>
                            <q-item-label>{{item.user_info.full_name}}</q-item-label>
                            <q-item-label caption lines="5">{{item.comentario}}</q-item-label>
                          </q-item-section>
                          <q-item-section side top>
                            <div class="column">
                              <q-item-label caption>{{item.created_at}}</q-item-label>
                              <div class="row justify-end q-mt-md items-center">
                                <div class="text-subtitle1 text-bold"> {{item.puntuacion}} </div>
                                <q-icon name="star" color="orange" class="q-ml-sm" size="30px" />
                              </div>
                            </div>
                          </q-item-section>
                        </q-item>
                      </div>
                    </q-list>
                  </div>
                  <div v-else>
                    <div class="absolute-center text-subtitle1">
                      Actualmente sin opiniones...
                    </div>
                  </div>
                </q-card>
        <div class="row justify-center items-center">
          <q-btn class="q-mt-sm" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
        </div>
    </q-card>
</div>
</template>
<script>
import env from '../../env'
import GoogleMap from '../../components/GoogleMap'
export default {
  components: {
    GoogleMap
  },
  data () {
    return {
      type: null,
      form: {},
      opinion: false,
      form2: {},
      puntuacion: 0,
      data: [],
      id: this.$route.params.id,
      markers: [],
      center: { lat: 10, lng: 10 },
      baseu: ''
    }
  },
  async mounted () {
    this.turismoId()
    this.consultar()
    this.baseu = env.apiUrl + '/obtener_imagen/'
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
    comentar () {
      this.$api.post('opinion/' + this.id, this.form2).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Opinion enviada con Exito',
            color: 'positive'
          })
          this.consultar()
          this.opinion = false
          this.form2.comentario = ''
          this.form2.puntuacion = ''
        }
      })
    },
    consultar () {
      this.$api.get('opiniones/' + this.id).then(res => {
        console.log(this.data, 'mostrando data')
        this.data = res
        this.data = res.map(v => {
          return {
            ...v,
            img: 'noimg.png'
          }
        })
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
