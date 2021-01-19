<template>
<div>
  <q-card class="column q-ma-md">
    <q-card class="q-pa-md column justify-center items-center" bordered>
      <q-card-section class="q-pa-sm q-mt-sm">
        <q-card class="shadow-3 q-pa-md bg-grey-3" style="border-radius:13px">
          <div class="text-h6">Lista de Usuarios</div>
          <div class="row">
          <q-card v-for="(item, index) in lista" :key="index" class="bg-grey-3" style="width: 50%">
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
                  <q-btn v-if="item.estatus === 1" label="Bloquear" color="red-10" @click="small = true, id = item._id , estatus = item.estatus"  />
                  <q-btn v-if="item.estatus === 0" label="Desbloquear" color="primary" @click="small = true, id = item._id , estatus = item.estatus" />
                </q-card-actions>
            </q-item>
          </q-card>
          </div>

        </q-card>
      </q-card-section>
    </q-card>
  </q-card>
  <q-dialog v-model="small" >
    <q-card style="width: 300px">
      <q-card-section>
        <div v-if="estatus === 1" class="text-h6">¿Estas seguro de bloquear a este usuario?</div>
          <div v-if="estatus === 0" class="text-h6">¿Estas seguro de desbloquear a este usuario?</div>
      </q-card-section>

      <q-card-section class="q-pa-md row justify-center items-center">
        <q-btn v-if="estatus === 1" class="q-ma-sm" label="Bloquear" color="red-10" @click="bloquear()" push v-close-popup />
        <q-btn v-if="estatus === 0" class="q-ma-sm" label="Desbloquear" color="primary" @click="desbloquear()" push v-close-popup />
        <q-btn class="q-ma-sm" label="Cerrar" color="primary" v-close-popup />
      </q-card-section>
    </q-card>
  </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {},
      small: false,
      lista: [],
      estatus: 3,
      id: ''
    }
  },
  methods: {
    obtener_usuarios () {
      this.$api.get('usuarios').then(res => {
        if (res) {
          this.lista = res
        }
      })
    },
    desbloquear () {
      this.$api.get('desbloquear/' + this.id).then(res => {
        if (res) {
          this.form = res
          console.log(this.form, 'datos')
          this.obtener_usuarios()
        }
      })
    },
    bloquear () {
      this.$api.get('bloquear/' + this.id).then(res => {
        if (res) {
          this.form = res
          console.log(this.form, 'datos2')
          this.obtener_usuarios()
        }
      })
    }
  },
  mounted () {
    this.obtener_usuarios()
  }
}
</script>
