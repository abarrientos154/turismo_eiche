<template>
  <div>
    <GmapMap :center="center" :zoom="15" map-type-id="terrain" style="width: 100%; height: 300px" class="q-mt-sm" >
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  props: ['form'],
  data () {
    return {
      center: { lat: 10.201337655073424, lng: -68.00833723294686 },
      markers: [
      ]
    }
  },
  mounted () {
    console.log(this.form, 'form')
    this.markers.push({
      title: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW', // this.form.nombre,
      description: this.form.descripcion,
      date_build: '',
      position: this.form.ubicacion // this.form.ubicacion
    })
    console.log(this.center, this.form.ubicacion, 'center antes')
    this.center = this.form.ubicacion
    console.log(this.center, 'center despues')
  },
  methods: {
    test () {

    }
  }
}
</script>

<style>

</style>>
