<template>
  <div>
    <p class="text-h6 text-center bg-red-8 shadow-5">{{titulo}}</p>
    <p v-if="mostrarSubtitulo" class="text-subtitle2 text-center text-strike bg-red-8 shadow-5">{{subtitulo}}</p>
    <div class="row">
      <q-btn v-for="(item, index) in listaBotones" :key="index" :label="item.name" @click="cambiar()" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'subtitulo', 'mostrarSubtitulo'],
  data () {
    return {
      listaBotones: [
        {
          icon: 'delete',
          name: 'Boton 1'
        },
        {
          icon: 'edit',
          name: 'Boton 2'
        },
        {
          icon: 'school',
          name: 'Boton 3'
        },
        {
          icon: 'users',
          name: 'Boton 4'
        }
      ]
    }
  },
  methods: {
    cambiar () {
      if (this.mostrarSubtitulo) {
        this.mostrarSubtitulo = false
      } else {
        this.mostrarSubtitulo = true
      }
    }
  }
}
</script>

<style>

</style>>
