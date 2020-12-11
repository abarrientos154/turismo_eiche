<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
    <div class="bg-primary row justify-center">
<q-toolbar class="bg-primary text-white rounded-borders">
        <div style="left:0px; position:absolute">
         <q-btn round>
      <q-avatar size="40px">
        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      </q-avatar>
    </q-btn>
      </div>
      <div style="right:0px; position:absolute">
        <q-btn round dense icon="settings" size="20px" color="primary" >
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>History</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Downloads</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Help &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
      </div>
</q-toolbar>
    </div>
    </q-header>

    <q-footer class="bg-primary text-white">
       <div class="q-mt-none">
      <q-tabs
        v-model="tab"
        align="justify"
        class="bg-primary text-white shadow-2"      >
        <q-tab name="mails" icon="mail" />
        <q-tab name="mails" icon="mail" />
        <q-tab name="mails" icon="mail" />
        <q-tab name="alarms" icon="alarm" />
        <q-tab name="alarms" icon="alarm" />
      </q-tabs>
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
