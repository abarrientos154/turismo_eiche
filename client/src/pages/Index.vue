<template>
<div>
   <div v-for="(item, index) in categorias" :key="index">
    <div class="row justify-center">
      <q-card class="q-my-none" style="width:100%; height:100%" >
      <div class="column justify-center items-center bg-white ">

        <q-card class="my-card shadow-11 q-mt-md">
          <q-img :src="item.img" style="height: 100%; width: 100%">
            <div v-if="index === 0" class="absolute-center">
              <q-btn rounded color="white" class="absolute-center glossy" text-color="black" :label="item.titulo" style="z-index:1" @click="$router.push('/Explora')" />
            </div>
            <div v-else class="absolute-center">
              <q-btn rounded color="white" class="absolute-center glossy" text-color="black" :label="item.titulo" style="z-index:1" @click="ircategoria(item.id)" />
            </div>
          </q-img>
         </q-card>

          <div class="my-card">
              <q-card class="q-pa-lg shadow-up-3 q-mt-sm" style="border-top-left-radius:25px;border-top-right-radius:25px">
              <div class="q-mt-none q-pl-md text-grey-10 text-bold">Algunos Destinos:</div>
              <q-scroll-area
              horizontal
              style="height: 310px;"
            >
              <div class="row no-wrap">
                <q-card v-for="(item2, index2) in options(index + 1)" :key="index2" class="q-mr-sm" style="border-radius:12px;width: 200px">
                  <q-card-section>
                    <div class="text-subtitle1">{{item2.nombre}}</div>
                    <q-img :src="item2.img" spinner-color="white" style="height: 170px; width: 170px">
                      <div v-if="item2.mostrar" class="column justify-center items-center">
                        {{item2.descripcion}}
                      </div>
                    </q-img>
                  </q-card-section>
                  <q-separator dark />
                  <q-card-actions>
                    <q-btn flat @click="item2.mostrar = !item2.mostrar">Descripción</q-btn>
                    <q-btn flat @click="$router.push('/detalle/'+item2._id)">Ver</q-btn>
                  </q-card-actions>
                </q-card>
              </div>
            </q-scroll-area>
          </q-card>
          </div>

  <div class="my-card">
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
        class="q-mt-md q-pl-md bg-blue-grey-6 text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
    </q-carousel>
  </div>
      </div>
    </q-card>
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
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
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
  width: 90%
  height:50%
</style>
