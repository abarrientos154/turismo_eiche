<template>
<div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-img :src="rutaimagen"></q-img>

      <q-card-section>
        <div class="text-h6">{{id}}</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
       <q-rating
      v-model="model"
      max="5"
      size="3.5em"
      color="yellow"
      icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      no-dimming
      />
      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      model: 2.3,
      rutaimagen: '',
      id: this.$route.params.id,
      lorem: 'Playa El Yaque​​ es el nombre de una playa venezolana​ conocida internacionalmente como uno de los mejores lugares en el mundo con condiciones ideales para la práctica del windsurf y el kitesurf, ​ esto atrae a los aficionados de todo el mundo, especialmente de Europa. Posee una variedad de hoteles, tiendas y restaurantes cerca de la playa, con una amplia gama de instalaciones y equipos deportivos.'
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
