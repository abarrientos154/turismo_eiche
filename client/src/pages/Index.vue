<template>
  <q-page class="flex flex-center">
    <q-card class="window-height" style="width:100%; height:100% " >
      <div class="column justify-center items-center bg-grey-3 ">
       <div class="text-h6 text-grey-9 text-bold">Novedades</div>
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
            height="300px"
            class="bg-primary text-white shadow-1 rounded-borders"
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
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="column">
       <div class="text-h6 text-grey-9 text-bold">Explora</div>
          </div>
          <q-carousel
            v-model="slide2"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="300px"
            class="bg-secondary text-white shadow-1 rounded-borders"
          >
        <q-carousel-slide name="style2" class="column no-wrap flex-center">
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
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
       <div class="column">
       <div class="text-h6 text-grey-9 text-bold">Actividades</div>
          </div>
          <q-carousel
            v-model="slide3"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="white"
            navigation
            padding
            arrows
            height="300px"
            class="bg-positive text-white shadow-1 rounded-borders"
          >
        <q-carousel-slide name="style3" class="column no-wrap flex-center">
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
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    </q-card>
  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      slide2: 'style2',
      slide3: 'style3',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style>
.clearfix {
  overflow: auto;
}</style>
