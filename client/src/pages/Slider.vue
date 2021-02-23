<template>
<div>
    <div class="window-height bg-primary" style="width:100%;height:100%;">
      <div class="fullscreen column justify-center items-center">
        <div class="column justify-center items-center bg-primary ">
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                ref="carousel"
                height="600px"
                class="bg-primary text-white rounded-borders"
                >
              <q-carousel-slide name="parte1" class="parte1" style="width:380px">
              </q-carousel-slide>
              <q-carousel-slide name="parte2" class="parte2" style="width:380px">
                </q-carousel-slide>
              <q-carousel-slide name="parte3" class="parte3" style="width:380px">
                  </q-carousel-slide>
                  <template v-slot:control>
                  <q-carousel-control
                    position="bottom-right"
                    :offset="[15, 300]"
                    class="q-gutter-xs">
                    <q-btn
                      push flat text-color="white" icon="keyboard_arrow_right"
                      @click="ruta()"
                    />
                  </q-carousel-control>
                   <q-carousel-control
                    position="bottom-left"
                    :offset="[15, 300]"
                    class="q-gutter-xs">
                    <q-btn
                      push flat text-color="white" icon="keyboard_arrow_left"
                      @click="$refs.carousel.previous()"
                    />
                  </q-carousel-control>
                  </template>
            </q-carousel>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
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
        this.$router.push('/home')
      } else {
        this.$refs.carousel.next()
      }
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
  background-image: url('../../public/presentacion/Presentacion_app_01.png');
  background-size: 100% 100%;
}
.parte2 {
  background-image: url('../../public/presentacion/Presentacion_app_02.png');
  background-size: 100% 100%;
}
.parte3 {
  background-image: url('../../public/presentacion/Presentacion_app_03.png');
  background-size: 100% 100%;
}
</style>
