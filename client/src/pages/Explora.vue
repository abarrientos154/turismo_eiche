<template>
    <div>
      <div>
          <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        class="bg-blue-grey-9 text-white shadow-1"
        style="height:87vh"
      >
        <q-carousel-slide :name="index" class="column no-wrap flex-center" :img-src="item.img" v-for="(item, index) in opciones" :key="index">
          <div class="q-mt-md text-center text-h5 text-bold">
            {{ item.name }}
          </div>
          <div class="absolute-bottom-right q-mb-sm" style="z-index:1">
            <q-btn push dense color="primary" @click="$router.push('/categoria/' + 1)" label="Ver" style="width:70px"/>
          </div>
        </q-carousel-slide>
      </q-carousel>
      </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      opciones: [],
      slide: 0,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods: {
    verificarId () {
      this.$api.get('idsub/' + 1).then(res => {
        if (res) {
          this.opciones = res
          console.log(this.opciones, 'opcionesssss')
        }
      })
    }
  },
  mounted () {
    this.verificarId()
  }
}

</script>
