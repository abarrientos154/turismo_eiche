<template>
  <div>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  props: ['titulo', 'Descripcion', 'imagen'],
  data () {
    return {
    }
  },
}
</script>

<style>

</style>>
