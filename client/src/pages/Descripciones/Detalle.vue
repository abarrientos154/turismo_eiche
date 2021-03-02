<template>
<q-page>
  <div style="width: 100%;height:100%">
    <q-img v-if="form.img" :src="form.img" style="height: 100%; width: 100%" />
    <q-carousel v-else animated v-model="slide" arrows navigation infinite class="full-width full-height" >
      <q-carousel-slide class="full-width full-height" v-for="(item, index) in form.images" :key="index" :name="index" :img-src="baseu + item" />
    </q-carousel>
  </div>
    <q-card class="bg-white full-width shadow-3">
       <q-card-section>
          <div class="text-h6">{{form.nombre}}</div>
           <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Detalle" icon="widgets" />
          <q-breadcrumbs-el label="Turismo" />
        </q-breadcrumbs>
        </q-card-section>
        <div class="q-ml-md text-h7 text-grey-9 text-bold">Popularidad:</div>
          <q-rating class="q-pa-sm" v-model="form.puntuacion" max="5" size="2.5em" color="yellow" disable icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
            <div v-if="form.descripcion">
              <div class="q-pa-md text-h7 text-grey-9 text-bold">Descripcion:</div>
                <q-card-section class="q-pt-none">
                  {{ form.descripcion }}
                </q-card-section>
            </div>
            <div v-if="form.direccion">
              <div class="q-pa-sm text-h7 text-grey-9 text-bold">Direccion:</div>
                <q-card-section class="q-pt-none">
                  {{ form.direccion }}
                </q-card-section>
            </div>
            <div v-if="form.numerocontact">
            <div class="q-pa-sm text-h7 text-grey-9 text-bold">Numero de contacto:</div>
             <q-card-section class="q-pt-none">
              {{ form.numerocontact }}
            </q-card-section>
            </div>
            <div v-if="form.pagina">
            <div class="q-pa-sm text-h7 text-grey-9 text-bold">Pagina web:</div>
            <q-card-section class="q-pt-none">
              {{ form.pagina }}
            </q-card-section>
            </div>

              <q-card v-if="form.habilitarH === true" class="q-pa-none" >
                  <div class="q-pa-md text-h7 text-grey-9 text-bold">Abierto:</div>
                  <q-card-section class="row q-pa-none">
                  <div v-for="(item, index) in form.diastrabajo" :key="index" class="q-ml-md text-h7">{{item}}</div>
                  </q-card-section>
                  <q-card-section >
                  <div class="q-pa-none text-h7 text-grey-9 text-bold">Horario:</div>
                    <div class="text-h7">{{form.tiempoinicio}}-{{form.tiempofinal}}</div>
                  </q-card-section>
              </q-card>
                <q-btn flat class="q-mt-none" label="Dar mi opinión" color="primary" @click="abrirOpinion()" />
                  <div class="full-width" v-if="form.ubicacion">
                    <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" @newPlace="handleNewPlace" :withoutDirection="true" />
                  </div>

            <q-card-section >
              <q-card class="bg-white full-width q-ma-md shadow-3">
                <div class="q-ml-md text-h6 text-grey-9 text-bold">Comentarios:</div>
                  <div class="q-mb-md q-mt-md" v-if="data.length > 0">
                    <q-list class="q-mt-sm q-mb-lg">
                      <div v-for="(item, index) in data" :key="index">
                        <q-item class="q-mt-md">
                          <q-item-section top avatar>
                            <q-avatar>
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
                  <div v-else style="height: 250px">
                   <div class="row justify-center">
                    <q-img src="sin comentario.png" style="height:250px;width:250px"  />
                   </div>
                  </div>
                </q-card>
                <div class="row justify-center items-center">
                <q-btn class="q-mt-sm" style="width:150px" color="primary" label="volver" push @click="$router.go(-1)" />
              </div>
              </q-card-section>

        <q-dialog v-model="opinion">
            <q-card style="width: 100%;border-radius:12px" class="q-ma-sm">
              <div class="column items-center justify-center">
              <div class="text-h6 text-grey-9 text-bold">Añadir comentario</div>
               </div>
              <q-card-section>
                <div style="width: 265px">
                  <q-input outlined  bottom-slots v-model="form2.comentario" label="Ingresa tu comentario" type=textarea>
                  </q-input>
                </div>
                <div>
                <div class="text-subtitle-2 text-grey-9 text-bold">Añade una Puntuacion</div>
                <q-rating v-model="form2.puntuacion" color="amber-13" size="2.5em" icon="star" />
              </div>
              </q-card-section>

              <div class="column items-center justify-center">
                <q-btn class="q-mt-md bg-primary text-white" label="Comentar" icon="send" @click="comentar()"  />
              </div>
            </q-card>
        </q-dialog>
    </q-card>

</q-page>
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
      usuario_logueado: {},
      type: null,
      form: {},
      opinion: false,
      form2: {},
      puntuacion: 0,
      slide: 0,
      lorem: 'Lorem',
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
    async abrirOpinion () {
      const verificarLS = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
      if (verificarLS) { // verifico la data local si no tiene es porque no se ha logueado
        this.$api.get('validar_estatus_logueo').then(res => {
          if (res.errorBloqueado) {
            this.$q.notify({
              message: res.message,
              color: res.color
            })
          } else if (res.errorLogueado) {
            this.$router.push('/login')
          } else if (!res.error) {
            this.opinion = true
          }
        })
      } else {
        this.$router.push('/')
        this.$q.notify({
          message: 'Necesita loguearse para poder comentar',
          color: 'negative'
        })
      }
    },
    async turismoId () {
      await this.$api.get('detalle/' + this.id).then(res => {
        if (res) {
          this.form = res
          console.log(this.form, 'formmmm')
          if (this.form.ubicacion) {
            this.center = this.form.ubicacion
            this.markers.push({
              title: this.form.nombre, // this.form.nombre,
              description: this.description,
              date_build: '',
              position: this.form.ubicacion
            })
          }
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
            img: env.apiUrl + '/perfil_img/' + v.user_id
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

<style lang="scss">
</style>
