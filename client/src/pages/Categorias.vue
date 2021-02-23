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
                <q-card v-for="(item2, index2) in opciones2 " :key="index2" style="border-radius:12px;width: 150px">
                  <q-card-section>
                    <q-img :src="item2.img" spinner-color="white" style="height: 140px; width: 120px">
                      <div class="absolute-top">
                        <div v-if="item2.mostrar === false" class="text-h7 absolute-center">{{item2.name}}</div>
                        </div>
                          <div v-if="item2.mostrar" class="column justify-center items-center">
                            {{item2.descripcion}}
                          </div>
                    </q-img>
                  </q-card-section>
                  <q-separator dark />
                  <q-card-actions>
                    <q-btn flat @click="item2.mostrar = !item2.mostrar">Descripción</q-btn>
                    <q-btn flat  @click="$router.push('/detalle/'+item2._id)">Ver</q-btn>
                  </q-card-actions>
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
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log(this.id, 'este es el id')
    this.verificarId()
    this.obtener_turismo()
  },
  methods: {
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
    options (id) {
      console.log(this.opciones2.filter(v => v.categoria_id === id), 'algo')
      return this.opciones2.filter(v => v.categoria_id === id)
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
          console.log(this.opciones, 'turismos')
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
