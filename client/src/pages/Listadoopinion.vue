<template>
  <div>
    <div class="row justify-center items-center bg-grey-3">
    <q-card style="width: 450px;border-radius:12px" class="q-ma-sm q-pa-lg shadow-3">
      <q-card-section align="center">
      <div class="q-px-sm text-subtitle1 text-grey">Busqueda de Opiniones</div>
        <q-select outlined  v-model="model" :options="datacategoria" option-label="titulo" option-value="_id" label="Categorias" map-option emit-value/>
        <q-select outlined  v-model="model2" :options="datasubcategoria" option-label="titulo" option-value="_id" label="Subcategorias" map-option emit-value/>
        <q-select outlined  v-model="model3" :options="dataturismo" option-label="nombre" option-value="_id" label="Turismo" map-option emit-value/>

      </q-card-section>
        <q-card-section align="center">
          <q-btn class="q-ma-sm" size="md" color="primary" icon="search" label="Buscar" push @click="$router.push('/detalle/'+item._id)" />
        </q-card-section>

       <q-card-section align="center">
          <q-list bordered style="width: 100%" class="q-pa-md">
            <div class="row q-gutter-sm justify-around" >
              <q-card  v-for="(item, index) in data" :key="index" clickable v-ripple class="bg-white" @click="$router.push('/detalle/'+item._id)" style="width: 20%">
                  <img :src="item.img ? item.img : baseu + item.images[0]" style="height:300px">
                    <q-card-section>
                      <div class="text-h6">{{item.nombre}}</div>
                    </q-card-section>
              </q-card>
            </div>
          </q-list>
      </q-card-section>
    </q-card>
   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datacategoria: [],
      datasubcategoria: [],
      dataturismo: [],

      data: [],
      model: null,
      model2: null,
      model3: null
    }
  },
  methods: {
    obtener_categorias () {
      this.$api.get('categoria').then(res => {
        if (res) {
          console.log(res, 'categorias')
          this.datacategoria = res
        }
      })
    },
    obtener_subcategorias () {
      this.$api.get('sub').then(res => {
        if (res) {
          console.log(res, 'subcategorias')
          this.datasubcategoria = res
        }
      })
    },
    obtener_turismo () {
      this.$api.get('turismo').then(res => {
        if (res) {
          console.log(res, 'turismo')
          this.dataturismo = res
        }
      })
    }
  },
  mounted () {
    this.obtener_categorias()
    this.obtener_subcategorias()
    this.obtener_turismo()
  }
}
</script>
