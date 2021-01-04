<template>
  <q-page class="flex flex-center">
    <q-card class="q-my-none" style="width:100%; height:100%" >
      <div class="column justify-center items-center bg-grey-3 ">

          <q-card class="my-card q-mt-none" @click="$router.push('/categoria/destinos')">
            <q-img src="https://okdiario.com/img/2020/04/15/aprende-a-explorar-la-casa-con-los-ninos-durante-el-confinamiento.jpg" style="height:400px" >
              <div class="absolute-bottom text-h6">
                Explora destinos
              </div>
            </q-img>
          </q-card>

            <q-card class="my-card q-mt-sm" @click="$router.push('/listadoturismo')">
            <q-img src="https://traveler.marriott.com/es/wp-content/uploads/sites/2/2018/11/SpiceMarket_cDanielAlvarez.jpg" style="height:400px" >
              <div class="absolute-bottom text-h6">
                Restaurantes y Pubs
              </div>
            </q-img>
          </q-card>

            <q-card class="my-card q-mt-sm" @click="$router.push('/categoria/hospedaje')">
              <q-img src="https://i0.wp.com/escapesporelmundo.com/wp-content/uploads/2019/01/hotel-post-e1551840906962.png?fit=920%2C518&ssl=1" style="height:400px" >
                <div class="absolute-bottom text-h6">
                  Hospedaje
                </div>
              </q-img>
            </q-card>

            <q-card class="my-card q-mt-sm" @click="$router.push('/categoria/transporte')">
              <q-img src="https://media.informabtl.com/wp-content/uploads/2019/12/4f38f069-servicio-de-transporte-privado.jpg" style="height:400px" >
                <div class="absolute-bottom text-h6">
                  Servicios de transporte
                </div>
              </q-img>
            </q-card>

            <q-card class="my-card q-mt-sm" @click="$router.push('/categoria/actividades')">
              <q-img src="https://cucunver.com/blog/wp-content/uploads/2018/11/actividades_asociaciones.jpg" style="height:400px" >
                <div class="absolute-bottom text-h6">
                  Actividades
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
.clearfix { overflow: auto; }
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  height:50%
</style>
