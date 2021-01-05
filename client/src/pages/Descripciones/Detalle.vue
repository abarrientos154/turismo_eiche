<template>
<div>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img :src="rutaimagen"></q-img>

      <q-card-section>
        <div class="text-h6">{{id}}</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
       <q-rating v-model="model" max="5" size="3.5em" color="yellow" icon="star_border" icon-selected="star" icon-half="star_half" no-dimming />
      <q-card-section class="q-pt-none">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam minima unde exercitationem cum perspiciatis recusandae architecto totam necessitatibus ipsa? Dolores modi deserunt temporibus officiis. Cupiditate rerum quas nostrum dicta.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quas dolorum commodi iusto, eligendi obcaecati dolore vitae impedit ut ratione fuga cupiditate voluptates? Laboriosam ab perspiciatis magnam nemo praesentium ea?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus autem esse provident tempora fuga quia fugit quaerat eius animi quisquam numquam, nobis veritatis sunt veniam culpa necessitatibus, quo porro aspernatur.
      </q-card-section>
      <q-card-section>
        <mapa  />
      </q-card-section>
    </q-card>
      <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
   </div>
  </div>
</template>
<script>
import Mapa from '../../components/Mapa'
export default {
  components: {
    Mapa
  },
  data () {
    return {
      model: 2.3,
      rutaimagen: '',
      id: this.$route.params.id
    }
  },
  mounted () {
    if (this.id === 'playas') {
      this.rutaimagen = 'https://i.pinimg.com/originals/93/76/26/93762621af81e5c1cef6d7a8687f09fd.jpg'
    } else if (this.id === 'restaurante') {
      this.rutaimagen = 'https://s1.eestatic.com/2020/03/12/cocinillas/actualidad-gastronomica/Coronavirus-Restaurantes-Actualidad_gastronomica_474214624_148088011_1706x960.jpg'
    } else if (this.id === 'hotel') {
      this.rutaimagen = 'https://orsmexico.files.wordpress.com/2013/02/bellagio-las-vegas.jpg'
    } else if (this.id === 'turismo') {
      this.rutaimagen = 'https://altavistaclub.com/blog/wp-content/uploads/2019/01/Coliseo-Romano.jpeg'
    }
  }
}

</script>
