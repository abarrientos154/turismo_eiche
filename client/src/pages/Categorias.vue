<template>
<div>
    <div class="row justify-center">
      <div class="text-h6 q-ma-md text-center titulos">TITULO</div>
    </div>
      <div class="q-pa-md q-gutter-sm">
        <q-breadcrumbs>
          <q-breadcrumbs-el label="Home" icon="home" />
          <q-breadcrumbs-el label="Categorias" icon="widgets" />
          <q-breadcrumbs-el label="Turismo" />
        </q-breadcrumbs>
              <div class= "row q-gutter-sm justify-around" >
                <q-card v-for="(item2, index2) in filtrarOpciones" :key="index2" class="q-mt-sm">
                    <q-img :src="item2.img" spinner-color="white" style="border-radius:12px; height: 260px; width: 155px">
                      <div class="absolute-full">
                        <div class="text-subtitle1">{{item2.nombre}}</div>
                        <q-scroll-area v-if="item2.mostrar" style="height: 170px; max-width: 300px;">
                          <div class="q-py-xs" >
                            <div v-if="item2.mostrar" class="column justify-center items-center">
                            {{item2.descripcion}}
                          </div>
                          </div>
                        </q-scroll-area>

                        <div class="row absolute-bottom">
                          <q-btn flat @click="item2.mostrar = !item2.mostrar">Descripción</q-btn>
                          <q-btn flat @click="$router.push('/detalle/'+ item2._id)">Ver</q-btn>
                        </div>
                      </div>
                    </q-img>
                </q-card>
              </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opciones: [],
      opciones2: [],
      filtrarOpciones: [],
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log(this.id, 'este es el id')
    // this.verificarId()
    this.obtener_turismo()
  },
  watch: {
    $route (to, from) {
      this.options()
    }
  },
  methods: {
    options () {
      this.filtrarOpciones = this.opciones2.filter(v => v.categoria_id === parseInt(this.$route.params.id))
    },
    verificarId () {
      this.$api.get('idsub/' + this.id).then(res => {
        if (res) {
          this.opciones = res.map(v => {
            return {
              ...v,
              mostrar: false
            }
          })
        }
        console.log(this.opciones2, 'datos')
      })
    },
    obtener_turismo () {
      this.$api.get('turismo').then(res => {
        if (res) {
          this.opciones2 = res.map(v => {
            return {
              ...v,
              mostrar: false,
              categoria_id: v.categoria.categoria_id
            }
          })
          this.options()
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.titulos {
  background-color: #52b6f8;
  width: 250px;
  border-radius: 12px
}
</style>
