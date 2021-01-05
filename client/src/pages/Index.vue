<template>
  <q-page class="flex flex-center">
    <q-card class="q-my-none" style="width:100%; height:100%" >
      <div class="column justify-center items-center bg-grey-3 ">

         <q-card  v-for="(item, index) in categorias" :key="index" clickable v-ripple class="my-card q-mt-sm" @click="$router.push('/categoria/'+item.id)">
          <q-img :src="item.img" style="height:400px">
            <div class="absolute-bottom text-h6">
                {{item.titulo}}
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
      categorias: [],
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  methods: {
    obtener_categorias () {
      this.$api.get('categoria').then(res => {
        if (res) {
          console.log(res, 'categorias')
          this.categorias = res
        }
      })
    }
  },
  mounted () {
    this.obtener_categorias()
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
