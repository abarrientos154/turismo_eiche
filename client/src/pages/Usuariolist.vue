<template>
<div>
  <q-card class="column q-ma-md">
    <q-card class="q-pa-md column justify-center items-center" bordered>
      <q-card-section class="q-pa-sm q-mt-sm">
        <q-card class="shadow-3 q-pa-md bg-grey-3" style="border-radius:13px">
          <div class="text-h6">Lista de Usuarios</div>
          <q-card  v-for="(item, index) in lista" :key="index" class="bg-grey-3" style="width: 100%">
          <q-separator />
      <q-item>

        <q-card-section>
          <div class= "column" >
          <div class="text-subtitle2">Nombre de Usuario:</div>
          <div class="text-subtitle1">{{ item.full_name }} {{ item.last_name }}</div>
         </div>
          <div class= "column" >
          <div class="text-subtitle2">Datos de Usuario:</div>
          <div class="text-subtitle1">{{ item.email }}</div>
          <div class="text-subtitle1">{{ item.phone }}</div>
          </div>
        </q-card-section>

        <q-space />
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn label="Desbloquear" color="primary" />
          <q-btn label="Bloquear" color="red-10"/>
        </q-card-actions>
      </q-item>
    </q-card>
        </q-card>
      </q-card-section>
    </q-card>
  </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      lista: [],
      showModalEditar: false
    }
  },
  methods: {
    obtener_usuarios () {
      this.$api.get('usuarios').then(res => {
        if (res) {
          this.lista = res
        }
      })
    }
  },
  mounted () {
    this.obtener_usuarios()
  }
}
</script>
