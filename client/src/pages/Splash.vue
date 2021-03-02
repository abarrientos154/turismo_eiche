<template>
<div>
  <div class="fullscreen fondo2">
    <div class="fullscreen column justify-center items-center">
      <div class="fondo" style="width:200px;height:200px;">
    </div>
      <div class="row absolute-bottom justify-center q-py-md">
        <div class="row">
          <div class="text-white text-caption">Un proyecto desarrollado por</div>
          <div class="text-white q-ml-sm text-bold text-text-caption" @click="ruta()">EICHE.</div>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      timer: ''
    }
  },
  methods: {
    ruta () {
      location.href = 'https://www.eichechile.com'
    },
    test () {
      this.$emit('pasar')
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    console.log('corriendo2')
    this.timer = setInterval(this.test, 5000)
  },
  cancelAutoUpdate () { clearInterval(this.timer) }

}
</script>

<style>
.fondo {
  background-image: url('../../../client/public/turismo.png');
  background-size: 100% 100%;
}
</style>
<style>
.fondo2 {
background-image: url('../../public/final01_background.jpeg');
background-size: 100% 100%;
}
</style>
