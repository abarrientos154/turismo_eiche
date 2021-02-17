<template>
<div>
  <div class="window-height bg-primary">
    <div class="fullscreen column justify-center items-center">
      <div class="fondo" style="width:200px;height:300px;">
    </div>
        <div class="column justify-center items-center">
          <div class="text-h6 text-white text-bold">¡Bienvenidos!</div>
        </div>
        <div style="right:0px; bottom:40px; position:absolute">
        <q-btn flat color="primary" label="Siguiente" text-color="white" @click="$router.push('/slider')"/>
      </div>
      <div class="row absolute-bottom justify-center q-py-sm">
        <div class="row">
          <div class="text-white text-subtitle2">Un proyecto desarrollado por</div>
          <div class="text-white q-ml-sm text-bold text-subtitle2" @click="ruta()">EICHE.</div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    ruta () {
      location.href = 'https://www.eichechile.com'
    }
  }
}
</script>

<style>
.fondo {
  background-image: url('../../../client/public/turismo original sin sombra-01.png');
  background-size: 100% 100%;
}
</style>
