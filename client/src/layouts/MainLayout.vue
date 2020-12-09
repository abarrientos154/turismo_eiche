<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
    <div class="bg-primary row justify-center">
      <div style="left:0px; position:absolute">
        <q-btn round dense color="primary" icon="menu" />
      </div>
      <div style="right:0px; position:absolute">
        <q-btn round dense icon="settings" color="primary" />
      </div>
    </div>
    </q-header>

    <q-footer>
      <div class="bg-primary row justify-center">
      <q-btn icon="stars"  />
        <q-space />
      <q-btn icon="stars" />
        <q-space />
      <q-btn icon="stars" round dense />
        <q-space />
      <q-btn icon="stars" />
        <q-space />
      <q-btn icon="stars" />
      </div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      data: {}
    }
  },
  methods: { // aqui dentro como ya te habia dicho van todas las funciones que puedes llamar desde un boton o etc
    cargar_datos () {
      this.data = JSON.parse(localStorage.getItem('PRUEBAS_NAEL_INFO')) // esto es para obtener los datos que se han guardado en el localstorage osea localmente cuando se inicio sesion, cuand se iinicia sesion los datos del usuario se guardan en PRUEBAS_NAEL_INFO
      console.log(this.data, 'mostrando data') // en la consola puedes ver que otros datos guardo localmente
    }
  },
  mounted () { // esto se coloca cuando quieres que cuando esta pagina abra se ejecuten ciertas funciones
    this.cargar_datos() // aqui estoy llamando a cargar datos para que cuando se abra esta pagina obviamente cargue los datos ejecuntado la funcion que cree alli arriba en los METHODS
    console.log(this.$route.meta.titulo, 'RUTAAAAAAAAAAAAAAAAAAAAAAAAA')
  }
}
</script>

<style>

</style>
