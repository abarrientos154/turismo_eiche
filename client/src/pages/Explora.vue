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
        style="height:94vh"
      >
        <q-carousel-slide :name="index" class="column no-wrap flex-center" :img-src="item.img" v-for="(item, index) in opciones" :key="index">
          <div class="absolute-full fondo-negro">
            <div class="absolute-center">
              <q-avatar square style="height: 100px; width: 200px">
                <img :src="item.clickImg" @click="ir(item.id)">
              </q-avatar>
            </div>
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
    ir (id) {
      this.$router.push('/categoria/1/' + id)
    },
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

<style lang="scss">
.fondo-negro {
  background: rgba(0, 0, 0, 0.344);
}
</style>
