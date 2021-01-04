<template>
  <q-page class="flex flex-center">
    <q-card class="q-my-none" style="width:100%; height:100%" >
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
            infinite
            height="350px"
            class="bg-primary text-white shadow-1 rounded-borders" style="width:100%"
          >
        <q-carousel-slide name="novedades" @click="$router.push('/listadoplaya')" img-src="https://i.pinimg.com/originals/b3/de/30/b3de3063fadc77bf3dab73b83ffa699d.jpg" style="width:100%" height="50%"
 >
          <div class="absolute-bottom custom-caption">
            <div class="text-h4">Playas</div>
          </div>

        </q-carousel-slide>
        <q-carousel-slide name="rest" @click="$router.push('/listadorestaurante')" img-src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2019/06/25/15614775255199.jpg" class="column no-wrap flex-center">
          <div class="absolute-bottom custom-caption">
            <div class="text-h4">Restaurantes</div>
          </div>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="hoteles" @click="$router.push('/listadohotel')" img-src="https://megaricos.com/wp-content/uploads/2019/07/shutterstock_184155629.jpg" class="column no-wrap flex-center">
            <div class="absolute-bottom custom-caption">
              <div class="text-h4">Hoteles</div>
            </div>
               <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="turismo" @click="$router.push('/listadoturismo')" img-src="https://www.inoutviajes.com/fotos/20/12334_inoutviajes.com-tendencias-turismo-2020-_1_.jpg" class="column no-wrap flex-center">
            <div class="absolute-bottom custom-caption">
              <div class="text-h4">Turismo</div>
            </div>
             <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-card class="my-card">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
          <div class="absolute-bottom text-subtitle2 text-center">
            Title
          </div>
        </q-img>
    </q-card>
    </div>
    </q-card>
  </q-page>

</template>

<script>
export default {
  data () {
    return {
      slide: 'novedades',
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
