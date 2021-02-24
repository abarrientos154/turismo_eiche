<template>
  <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
    <q-tab-panel name="inicio">
      <slider @pasar="pasar" />
    </q-tab-panel>

    <q-tab-panel name="login">
      <login />
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
import Slider from '../pages/Splash'
import Login from '../layouts/Login'
export default {
  components: {
    Slider, Login
  },
  data () {
    return {
      panel: 'inicio'
    }
  },
  methods: {
    pasar () {
      this.panel = 'login'
    }
  }
}
</script>

<style>

</style>
