<template>
  <div>
    <GmapMap :center="{lat:39.06381859766945, lng:-101.56402439607774}" :zoom="7" map-type-id="terrain" style="width: 500px; height: 300px" >
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
    </GmapMap>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: ''
    }
  },
  methods: {
    test () {

    }
  }
}
</script>

<style>

</style>>
