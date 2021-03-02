<template>
<div>
  <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      ref="carousel"
      height="700px"
      class="bg-white fullscreen column justify-center items-center text-white rounded-borders"
      >
    <q-carousel-slide name="parte1" class="column no-wrap flex-center">
      <q-img class="parte1" style="height: 500px; width: 300px">
      </q-img>
      <div class="text-center text-grey-8">
        {{ lorem }}
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="parte2"  class="column no-wrap flex-center">
    <q-img class="parte2" style="height: 500px; width: 300px">
      </q-img>
      <div class="text-center text-grey-8">
        {{ lorem3 }}
      </div>
      </q-carousel-slide>
    <q-carousel-slide name="parte3"  class="column no-wrap flex-center">
    <q-img class="parte3" style="height: 500px; width: 300px">
      </q-img>
      <div class="text-center text-grey-8">
        {{ lorem5 }}
      </div>
        </q-carousel-slide>
        <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[15, 300]"
          class="q-gutter-xs">
          <q-btn
            push flat text-color="primary" icon="keyboard_arrow_right"
            @click="ruta()"
          />
        </q-carousel-control>
          <q-carousel-control
          position="bottom-left"
          :offset="[15, 300]"
          class="q-gutter-xs">
          <q-btn
            push flat text-color="primary" icon="keyboard_arrow_left"
            @click="$refs.carousel.previous()"
          />
        </q-carousel-control>
        </template>
  </q-carousel>
</div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      user: {
      },
      slide: 'parte1',
      lorem: '¡Descubre diferentes lugares, playas, hoteles y principales zonas turísticas en Mejillones para planificar de manera más organizada y divertida tu viaje! Consigue ofertas exclusivas, gestiona tus reservas y revisa la opinión de otros viajeros.',
      lorem2: '¿Qué contiene la app? ',
      lorem3: 'La aplicación registra los mejores destinos turísticos en Mejillones, diferentes opciones de hospedaje, servicios de transporte y actividades de entretenimiento. Guarda tus preferencias y consúltalas cuando desees, recibe alertas especiales y halla los mejores restaurantes que otros viajeros recomiendan.',
      lorem4: '¿Qué puede hacer dentro de la app? ',
      lorem5: 'Encuentra información específica sobre cada uno de los sitios que anheles visitar, como horarios, precios, ubicación o descripciones. Deja tu comentario, o lee el de otros usuarios, para hablar de tu experiencia. ¡Todo al alcance de tu mano!'
    }
  },
  methods: {
    ruta () {
      if (this.slide === 'parte3') {
        this.estaLogueado()
        this.$router.push('/home')
      } else {
        this.$refs.carousel.next()
      }
    },
    estaLogueado () {
      const logueo = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
      if (logueo) {
        this.logueado = true
        this.user = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
        this.$q.notify({
          message: ('Bienvenido a Mejillones' + ' ' + this.user.full_name + ' ' + this.user.last_name),
          color: 'primary'
        })
      } else {
        this.logueado = false
        this.$q.notify({
          message: ('Bienvenido a Mejillones'),
          color: 'primary'
        })
      }
    },
    mounted () {
    }
  }
}
</script>
<style>
.clearfix {
  overflow: auto;
}
</style>
<style>
.parte1 {
  background-image: url('../../public/presentacion/Redimensión 1.png');
  background-size: 100% 100%;
}
.parte2 {
  background-image: url('../../public/presentacion/Redimensión 2.png');
  background-size: 100% 100%;
}
.parte3 {
  background-image: url('../../public/presentacion/Redimensión 3.png');
  background-size: 100% 100%;
}
</style>
