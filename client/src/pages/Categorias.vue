<template>
<div>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class= "row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in opciones" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)" style="width: 45%">
          <img :src="item.img" style="height:300px">
            <q-card-section>
              <div class="text-h6">{{item.titulo}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ item.descripcion }}
            </q-card-section>
       </q-card>
    </div>
    <div class="column justify-center items-center bg-grey-3 ">
      <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
      </div>
  </q-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opciones: [],
      id: this.$route.params.id
    }
  },
  mounted () {
    console.log(this.$route.params.id, 'eddddddddd')
    console.log(this.id, 'chicha')
    this.obtener_subcategorias()
    this.verificarId()
  },
  methods: {
    verificarId (id) {
      console.log(this.id, 'chicha2')
      this.$api.get('idsub/' + id).then(res => {
        if (res) {
          this.opciones = res
        }
      })
    },
    obtener_subcategorias () {
      this.$api.get('sub').then(res => {
        if (res) {
          console.log(res, 'ahi ta pe')
          this.opciones = res
        }
      })
    }
  }
}
</script>
