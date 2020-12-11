<template>
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
                  <div class="q-mt-md text-center">
                    {{ lorem }}
                  </div>
                </q-carousel-slide>
                  <q-carousel-slide name="layers" class="column no-wrap flex-center">
                    <q-icon name="layers" size="56px" />
                    <div class="q-mt-md text-center">
                      {{ lorem }}
                    </div>
                  </q-carousel-slide>
            </q-carousel>
        <div style="right:0px; bottom:0px; position:absolute">
                <q-btn flat color="primary" label="Siguiente" text-color="white" @click="$router.push('/login')"/>
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
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style>
.clearfix {
  overflow: auto;
}</style>
