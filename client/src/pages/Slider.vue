<template>
<div>
    <div class="window-height bg-primary">
      <div class="fullscreen column justify-center items-center">
        <div class="column justify-center items-center bg-primary ">
          <div class="text-h6 text-white text-bold">¡Bienvenidos!</div>
            <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                control-color="white"
                navigation
                padding
                arrows
                height="575px"
                class="bg-primary text-white rounded-borders"
                >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <q-icon name="style" size="56px" />
                  <div class="q-mt-md text-center">
                    {{ lorem }}
                  </div>
              </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <q-icon name="live_tv" size="56px" />
                   <p class="q-mt-md text-center text-bold">{{ lorem2 }}</p>
                      <p class="q-mt-sm text-center">
                      {{ lorem3 }}
                    </p>
                </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="layers" size="56px" />
                    <p class="q-mt-md text-center text-bold">{{ lorem4 }}</p>
                      <p class="q-mt-sm text-center">
                      {{ lorem5 }}
                    </p>
                  </q-carousel-slide>
            </q-carousel>
        <div style="right:0px; bottom:0px; position:absolute">
                <q-btn flat color="primary" label="Siguiente" text-color="white" @click="$router.push('/login')"/>
              </div>
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
      slide: 'style',
      lorem: '¡Descubre diferentes lugares, playas, hoteles y principales zonas turísticas en Mejillones para planificar de manera más organizada y divertida tu viaje! Consigue ofertas exclusivas, gestiona tus reservas y revisa la opinión de otros viajeros.',
      lorem2: '¿Qué contiene la app? ',
      lorem3: 'La aplicación registra los mejores destinos turísticos en Mejillones, diferentes opciones de hospedaje, servicios de transporte y actividades de entretenimiento. Guarda tus preferencias y consúltalas cuando desees, recibe alertas especiales y halla los mejores restaurantes que otros viajeros recomiendan.',
      lorem4: '¿Qué puede hacer dentro de la app? ',
      lorem5: 'Encuentra información específica sobre cada uno de los sitios que anheles visitar, como horarios, precios, ubicación o descripciones. Deja tu comentario, o lee el de otros usuarios, para hablar de tu experiencia. ¡Todo al alcance de tu mano!'
    }
  }
}
</script>
<style>
.clearfix {
  overflow: auto;
}</style>
