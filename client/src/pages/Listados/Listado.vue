<template>
<div>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class= "row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in opciones" :key="index" clickable v-ripple class="bg-white" @click="$router.push(item.ruta)" style="width: 45%">
          <img :src="item.img" style="height:300px">
            <q-card-section>
              <div class="text-h6">{{item.nombre}}</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              {{ item.descripcion }}
            </q-card-section>
       </q-card>
    </div>
    <div class="column justify-center items-center">
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
    console.log(this.id, 'este es el id')
    this.obtener_turismos()
    this.turismoId()
  },
  methods: {
    turismoId () {
      this.$api.get('turis/' + this.id).then(res => {
        if (res) {
          this.opciones = res
        }
      })
    },
    obtener_turismos () {
      this.$api.get('turismo').then(res => {
        if (res) {
          console.log(res, 'turismos')
          this.opciones = res
        }
      })
    }
  }
}
</script>
