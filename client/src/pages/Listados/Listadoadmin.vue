<template>
<div>
  <q-list bordered style="width: 100%" class="q-pa-md">
    <div class="row q-gutter-sm justify-around" >
       <q-card  v-for="(item, index) in opciones" :key="index" class="bg-white" style="width: 45%">
        <q-card-section>
          <div class="text-h6">{{item.nombre}}</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ item.descripcion }}
        </q-card-section>
        <q-card-actions class="q-pa-sm enlace">
          <q-btn color="black" icon="remove_red_eye" flat dense @click="$router.push('/detalleadmin/'+item._id)" />
              <q-btn color="black" icon="delete" flat dense @click="alert = true , id = item._id"  />
        </q-card-actions>
       </q-card>
    </div>
    <q-page>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn label="Nuevo" size="md" icon-right="add"  color="primary" @click="$router.push('/Acategoria')" />
      </q-page-sticky>
    </q-page>
  </q-list>
  <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">¿Estas seguro de borrar este turismo?</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Eliminar" color="red" icon="delete" flat dense @click="eliminar()" push v-close-popup />
          <q-btn flat label="Cerrar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      opciones: [],
      alert: false,
      id: ''
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
    },
    eliminar () {
      this.$api.delete('turismo/' + this.id).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Turismo Eliminado con Exito',
            color: 'positive'
          })
          this.verificarId()
        }
      })
    }
  }
}
</script>
<style>
.enlace {
  position: absolute;
  top: 0px;
  right:0px;
  z-index: 20;
}

</style>
