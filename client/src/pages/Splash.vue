<template>
  <div class="window-height bg-primary">
    <div class="fullscreen column justify-center items-center">
      <img src="~assets/quasar-logo-full.svg" alt="Logo HEvent" style="width: 60%;">
        <div class="column justify-center items-center">
          <div class="text-h6 text-white text-bold">¡Bienvenidos!</div>
        </div>
        <div style="right:0px; bottom:0px; position:absolute">
        <q-btn flat color="primary" label="Siguiente" text-color="white" @click="$router.push('/slider')"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>
