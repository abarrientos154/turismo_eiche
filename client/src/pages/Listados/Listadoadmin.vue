<template>
<div>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class="row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in opciones" :key="index" clickable v-ripple class="bg-white" style="width: 45%" @click="$router.push('/detalleadmin/'+item._id)">
        <q-card-section>
          <div class="text-h6">{{item.nombre}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ item.descripcion }}
        </q-card-section>
       </q-card>
    </div>
    <q-page>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn label="Nuevo" size="md" icon-right="add"  color="primary" @click="$router.push('/Acategoria')" />
      </q-page-sticky>
    </q-page>
  </q-list>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opciones: []
    }
  },
  mounted () {
    this.verificarId()
  },
  methods: {
    verificarId () {
      this.$api.get('categorialist').then(res => {
        if (res) {
          this.opciones = res
        }
      })
    }
  }
}
</script>
