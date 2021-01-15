<template>
<div class="q-pa-md">
    <q-card class="bg-white full-width q-pa-xl q-ma-md shadow-3" v-if="form">
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
                            <div class="row">
                              <q-btn color="black" icon="delete" flat dense @click="alert = true , id = item._id"  />
                              </div>
                          </q-item-section>
                        </q-item>
                      </div>
                    </q-list>
                  </div>
                  <div class="q-pa-md column q-ma-md items-center q-gutter-md absolute-center" v-else>
                    <div class="absolute-botomn text-subtitle1">
                      Actualmente sin opiniones...
                    </div>
                  </div>
                </q-card>
        <div class="row justify-center items-center">
          <q-btn class="q-mt-sm" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
        </div>
    </q-card>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">¿Estas seguro de borrar este comentario?</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Eliminar" color="red" icon="delete" flat dense @click="eliminar()" push v-close-popup />
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</div>
</template>
<script>
import env from '../env'
import GoogleMap from '../components/GoogleMap'
export default {
  components: {
    GoogleMap
  },
  props: ['form'],
  data () {
    return {
      type: null,
      puntuacion: 0,
      alert: false,
      id: '',
      data: [],
      markers: [],
      center: { lat: 10, lng: 10 },
      baseu: ''
    }
  },
  async mounted () {
    this.baseu = env.apiUrl + '/obtener_imagen/'
    this.consultar()
  },
  methods: {
    consultar () {
      this.$api.get('opiniones/' + this.form._id).then(res => {
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
    eliminar () {
      this.$api.delete('opi/' + this.id).then(res => {
        if (res) {
          this.$q.notify({
            message: 'comentario Eliminado con Exito',
            color: 'positive'
          })
          this.consultar()
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
