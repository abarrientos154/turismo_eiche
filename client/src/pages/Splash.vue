<template>
  <div class="window-height bg-primary">
    <div class="row justify-center">
      <img src="~assets/quasar-logo-full.svg" alt="Logo HEvent" style="width: 80%;">
        <div class="row justify-center items-center">
          <div class="text-h6 text-white text-bold">¡Bienvenidos!</div>
        </div>
    </div>
      <div class="column" style="right:0px; bottom:0px; position:absolute">
        <q-btn flat color="primary" label="Siguiente" text-color="white" @click="$router.push('/slider')"/>
      </div>
  </div>
</template>

<script>
</script>
