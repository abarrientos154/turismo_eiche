<template>
<div>
  <div class="row justify-center">
  </div>
   <div v-for="(item, index) in categorias" :key="index">
    <div class="row justify-center">
      <div style="width:100%; height:100%" >
      <div class="column justify-center items-center bg-white ">
        <q-card class="my-card" @click="index === 0 ? $router.push('/Explora') : ircategoria(item.id)">
          <q-img :src="item.img" style="height: 100%; width: 100%">
            <div class="absolute-full">
            <div v-if="index === 0" class="absolute-center">
              <q-avatar square style="height: 100px; width: 200px" @click="$router.push('/Explora')">
                <img :src="item.titulo">
              </q-avatar>
            </div>
            <div v-else class="absolute-center">
            <q-avatar square style="height: 100px; width: 200px" @click="ircategoria(item.id)">
                <img :src="item.titulo">
              </q-avatar>
            </div>
            </div>
          </q-img>
         </q-card>

          <div class="my-card q-mt-sm">
              <div class="q-mt-sm">
              <div class="q-pl-md text-grey-10 text-bold">Algunos Destinos:</div>
              <q-scroll-area
              horizontal
              style="height: 310px;"
            >
              <div class="row no-wrap">
                <q-card v-for="(item2, index2) in options(index + 1)" :key="index2" class="q-mr-sm q-mt-sm" >
                    <q-img :src="item2.img" spinner-color="white" @click="$router.push('/detalle/'+ item2._id)" style="border-radius:12px; height: 260px; width: 180px" >
                      <div class="absolute-full">
                        <div class="text-caption text-bold">{{item2.nombre}}</div>
                        <q-scroll-area v-if="item2.mostrar" style="height: 170px; max-width: 300px;">
                          <div class="q-py-xs" >
                            <div v-if="item2.mostrar" class="column justify-center items-center">
                            {{item2.descripcion}}
                          </div>
                          </div>
                        </q-scroll-area>
                      </div>
                    </q-img>
                    <div class="row justify-center absolute-bottom">
                      <q-btn flat @click="item2.mostrar = !item2.mostrar" class="text-white" style="z-index:1">Descripción</q-btn>
                    </div>
                </q-card>
              </div>
            </q-scroll-area>
          </div>
          </div>
      </div>
    </div>
    </div>
   </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      categorias: [],
      logueado: false,
      mostrar: '',
      vista: false,
      opciones: [],
      opciones3: [],
      slide: 'style',
      user: {
      }
    }
  },
  methods: {
    obtener_categorias () {
      this.$api.get('categoria').then(res => {
        if (res) {
          this.categorias = res
        }
      })
    },
    options (id) {
      return this.opciones.filter(v => v.categoria_id === id)
    },
    obtener_subcategoria () {
      this.$api.get('sub').then(res => {
        if (res) {
          this.opciones3 = res.map(v => {
            return {
              ...v,
              mostrar: false
            }
          })
        }
      })
    },
    obtener_turismo () {
      this.$api.get('turismo').then(res => {
        if (res) {
          this.opciones = res.map(v => {
            return {
              ...v,
              mostrar: false,
              categoria_id: v.categoria.categoria_id
            }
          })
        }
      })
    },

    verificarId () {
      this.$api.get('idsub/' + 1).then(res => {
        if (res) {
          this.opciones = res
        }
      })
    },
    ircategoria (numerocategoria) {
      this.$router.push('/categoria/' + numerocategoria)
    },
    estaLogueado () {
      const logueo = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
      if (logueo) {
        this.logueado = true
        this.user = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
      } else {
        this.user.full_name = ''
        this.logueado = false
      }
    }
  },
  mounted () {
    this.obtener_categorias()
    this.obtener_subcategoria()
    this.obtener_turismo()
  }
}

</script>
<style>
.clearfix { overflow: auto; }
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  height:50%
</style>
