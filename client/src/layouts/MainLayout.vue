<template>
<div>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <div class="bg-primary row justify-center">
        <q-toolbar class="bg-primary text-white rounded-borders">
          <div style="left:0px; position:absolute">
          <q-btn round @click="perfilD = true" v-if="logueado">
            <q-avatar size="40px">
              <img :src="usuario_logueado.perfil ? baseu : 'noimg.png'">
            </q-avatar>
            </q-btn>
          </div>
          <div style="right:0px; position:absolute">
            <q-btn round dense icon="settings" size="20px" color="primary" >
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-ripple class="bg-blue-grey-1 q-pa-md" @click="cerrarsesion()">
                    <q-item-section> <q-icon name="exit_to_app" size='xl' /></q-item-section>
                    <q-item-section>Cerrar sesion</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-footer class="bg-primary text-white">
      <div class="q-mt-none">
        <q-tabs
          v-model="tab"
          align="justify"
          class="bg-primary text-white shadow-2"      >
          <q-tab icon="explore" @click="ircategoria(1)" />
          <q-tab icon="local_dining" @click="ircategoria(2)" />
          <q-tab icon="hotel" @click="ircategoria(3)" />
          <q-tab icon="commute" @click="ircategoria(4)" />
          <q-tab icon="streetview" @click="ircategoria(5)" />
        </q-tabs>
      </div>
    </q-footer>

    <q-dialog v-model="perfilD">
      <foto-perfil :logueado="logueado" />
    </q-dialog>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script>
import FotoPerfil from '../components/FotoPerfil'
import env from '../env'
export default {
  components: {
    FotoPerfil
  },
  data () {
    return {
      imgPerfil: null,
      logueado: false,
      perfilD: false,
      text: '',
      data: {},
      tab: '',
      usuario_logueado: {},
      baseu: ''
    }
  },
  mounted () {
    this.estaLogueado()
  },
  methods: {
    ircategoria (numerocategoria) {
      this.$router.push('/categoria/' + numerocategoria)
      location.href = 'http://localhost:8080/#/categoria/' + numerocategoria
      location.reload()
    },
    cerrarsesion () {
      localStorage.removeItem('TUR_SESSION_INFO')
      this.$q.notify({
        message: 'Sesion cerrada con exito',
        color: 'positive'
      })
      this.$router.push('/login')
    },
    estaLogueado () {
      const logueo = JSON.parse(localStorage.getItem('TUR_SESSION_INFO'))
      if (logueo) {
        this.logueado = true
        this.getInfo()
      } else {
        this.logueado = false
      }
    },
    async getInfo () {
      this.$q.loading.show()
      await this.$api.get('user_info').then(res => {
        this.usuario_logueado = res
        this.baseu = env.apiUrl + '/perfil_img/' + this.usuario_logueado._id
        this.$q.loading.hide()
      })
      this.$q.loading.hide()
    }
  }
}
</script>

<style>

</style>
