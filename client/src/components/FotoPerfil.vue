<template>
  <q-card class="full-width" style="height:300px; border-radius:20px" v-if="logueado">
    <div class="column items-center justify-center absolute-center">
      <div class="q-mb-md row justify-center">
        <q-img :src="form.perfil ? baseu : 'noimg.png'" style="width:150px;height:150px;border-radius:100%" >
          <div class="absolute-center bg-transparent text-center" style="width: 100%">
            <div class="absolute-center" style="z-index:1">
              <q-file borderless v-model="perfil" class="button-subir" @input="changePerfil()" accept=".jpg, image/*"
              >
                <q-avatar class="absolute-center cursor-pointer">
                  <q-icon name="cloud_upload" color="white" class="absolute-center" />
                </q-avatar>
              </q-file>
            </div>
          </div>
        </q-img>
      </div>
      <div class="text-bold text-grey-7"> SUBE UNA FOTO </div>
    </div>
  </q-card>
  <q-card  class="full-width" style="height:200px; border-radius:20px" v-else>
    <div class="row justify-center items-center block">
      Debes estar logueado para subir una foto
    </div>
  </q-card>
</template>

<script>
import env from '../env'
export default {
  props: ['logueado'],
  data () {
    return {
      perfil: null,
      baseu: '',
      form: {}
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async changePerfil () {
      this.$q.loading.show()
      var formData = new FormData()
      var files = []
      files[0] = this.perfil
      console.log(files, 'afiles')
      formData.append('perfil', files[0])
      await this.$api.post('subir_foto_perfil', formData, {
        headers: {
          'Content-Type': undefined
        }
      }).then(res => {
        if (res) {
          this.$q.notify({
            message: 'Haz Cambiado tu foto de perfil',
            color: 'positive'
          })
          this.$q.loading.hide()
          location.reload()
        }
        this.$q.loading.hide()
      })
    },
    async getInfo () {
      this.$q.loading.show()
      await this.$api.get('user_info').then(res => {
        this.form = res
        this.baseu = env.apiUrl + '/perfil_img/' + this.form._id
        this.$q.loading.hide()
      })
      this.$q.loading.hide()
    }
  }
}
</script>

<style lang="scss">
.button-subir {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: #0016b0;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #7e7e7e;
  height:40px;
  width: 40px;
}
</style>
