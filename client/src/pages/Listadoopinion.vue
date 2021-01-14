<template>
  <div class="column items-center">
    <q-card style="width: 800px;border-radius:12px" class="q-ma-sm q-pa-lg shadow-3">
      <q-card-section align="center">
      <div class="q-px-sm text-subtitle1 text-grey">Busqueda de Opiniones</div>
        <div class="column q-gutter-sm">
          <q-select outlined  v-model="categoria" :options="datacategoria" option-label="titulo" option-value="id" label="Categorias" map-options emit-value @input="anularTurSub()" />
          <q-select outlined  v-model="subcategoria" :options="filtrarSub" option-label="titulo" option-value="id" label="Subcategorias" map-options emit-value @input="anularTur()" />
          <q-select outlined  v-model="turismo" :options="filtrarTur" option-label="nombre" option-value="_id" label="Turismo" map-options emit-value @input="seleccionarTurismo()" />
        </div>

      </q-card-section>
        <q-card-section v-if="formTurismo._id">
          <detalle-turismo :form="formTurismo" v-if="formTurismo" />
        </q-card-section>
    </q-card>
  </div>
</template>
<script>
import DetalleTurismo from '../components/DetalleTurismo'
export default {
  components: {
    DetalleTurismo
  },
  data () {
    return {
      datacategoria: [],
      datasubcategoria: [],
      dataturismo: [],
      data: [],
      categoria: null,
      subcategoria: null,
      turismo: null,
      formTurismo: {}
    }
  },
  computed: {
    filtrarSub () {
      if (this.categoria) {
        console.log(this.datasubcategoria.filter(v => v.categoria_id === this.categoria), 'filtrado', this.categoria, 'categoria')
        return this.datasubcategoria.filter(v => v.categoria_id === this.categoria)
      } else {
        return []
      }
    },
    filtrarTur () {
      if (this.subcategoria) {
        console.log(this.dataturismo.filter(v => v.subCategoria_id === this.subcategoria), 'subcategoria_id')
        return this.dataturismo.filter(v => v.subCategoria_id === this.subcategoria)
      } else {
        return []
      }
    }
  },
  methods: {
    anularTurSub () {
      this.subcategoria = null
      this.turismo = null
      this.formTurismo = {}
    },
    anularTur () {
      this.turismo = null
      this.formTurismo = {}
    },
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
    },
    seleccionarTurismo () {
      console.log(this.turismo, 'turismo id')
      this.formTurismo = this.dataturismo.find(v => v._id === this.turismo)
      console.log(this.formTurismo, 'form turismo')
    }
  },
  mounted () {
    this.obtener_categorias()
    this.obtener_subcategorias()
    this.obtener_turismo()
  }
}
</script>
