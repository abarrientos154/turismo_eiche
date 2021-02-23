<template>
<div>
   <div v-for="(item, index) in categorias" :key="index">
    <div class="row justify-center">
      <div style="width:100%; height:100%" >
      <div class="column justify-center items-center bg-white ">

        <q-card class="my-card q-mt-sm">
          <q-img :src="item.img" style="height: 100%; width: 100%">
            <div v-if="index === 0" class="absolute-center">
              <q-btn rounded color="white" class="absolute-center glossy" text-color="black" :label="item.titulo" style="z-index:1" @click="$router.push('/Explora')" />
            </div>
            <div v-else class="absolute-center">
              <q-btn rounded color="white" class="absolute-center glossy" text-color="black" :label="item.titulo" style="z-index:1" @click="ircategoria(item.id)" />
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
                <q-card v-for="(item2, index2) in options(index + 1)" :key="index2" class="q-mr-sm q-mt-sm">
                    <q-img :src="item2.img" spinner-color="white" style="border-radius:12px; height: 260px; width: 180px">
                      <div class="absolute-full">
                        <div class="text-subtitle1">{{item2.nombre}}</div>
                        <q-scroll-area v-if="item2.mostrar" style="height: 170px; max-width: 300px;">
                          <div v-for="n in 100" :key="n" class="q-py-xs" >
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
            </q-scroll-area>
          </div>
          </div>

  <div class="my-card q-pt-md">
    <q-carousel
        v-model="slide"
        vertical
        transition-prev="slide-down"
        transition-next="slide-up"
        swipeable
        animated
        control-color="white"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        arrows
        height="300px"
        class="q-pl-md bg-blue-grey-6 text-white rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">

        </q-carousel-slide>
    </q-carousel>
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
      mostrar: '',
      vista: false,
      opciones: [],
      opciones3: [],
      slide: 'style'
    }
  },
  methods: {
    obtener_categorias () {
      this.$api.get('categoria').then(res => {
        if (res) {
          console.log(res, 'categorias')
          this.categorias = res
        }
      })
    },
    options (id) {
      console.log(this.opciones.filter(v => v.categoria_id === id), 'algo')
      return this.opciones.filter(v => v.categoria_id === id)
    },
    obtener_subcategoria () {
      this.$api.get('sub').then(res => {
        if (res) {
          console.log(res, 'subcategorias')
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
          console.log(this.opciones, 'turismos')
        }
      })
    },
    verificarId () {
      this.$api.get('idsub/' + 1).then(res => {
        if (res) {
          this.opciones = res
          console.log(this.opciones, 'opcionesssss')
        }
      })
    },
    ircategoria (numerocategoria) {
      this.$router.push('/categoria/' + numerocategoria)
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
