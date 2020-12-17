<template>
  <div>
    <q-page>
   <q-page-container>
      <componente :titulo="" subtitulo=""  />
      <router-view />
    </q-page-container>
    </q-page>
  </div>
  </template>
  <script>
  import Componente from '../components/DetalleCategoria'
export default {
  components: {
    Componente
  },
  data () {
    return {
    }
   }
  }
  </script>
