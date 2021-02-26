<template>
<div>
  <div class="window-height bg-white">
    <div class="fullscreen column justify-center items-center">
      <div class="fondo" style="width:200px;height:200px;">
    </div>
      <div class="row absolute-bottom justify-center q-py-sm">
        <div class="row">
          <div class="text-black text-subtitle2">Un proyecto desarrollado por</div>
          <div class="text-black q-ml-sm text-bold text-subtitle2" @click="ruta()">EICHE.</div>
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
