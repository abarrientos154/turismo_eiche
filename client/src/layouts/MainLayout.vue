<template>
<div>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
        <q-toolbar class="bg-primary text-white rounded-borders">
        <q-btn flat dense round @click="drawerLeft = !drawerLeft" icon="menu" />
        <div class="absolute-center">
          <div>{{this.$route.meta.titulo}}</div>
        </div>
          <div style="left:50px; position:absolute">
          <q-btn round @click="perfilD = true" v-if="logueado">
            <q-avatar size="40px">
              <img :src="usuario_logueado.perfil ? baseu : 'noimg.png'">
            </q-avatar>
            </q-btn>
          </div>
          <div style="right:0px; position:absolute">
            <q-btn flat label="Salir" size="12px" color="white" @click="cerrarsesion()" >
            </q-btn>
          </div>
        </q-toolbar>

    </q-header>
        <q-drawer v-model="drawerLeft" :width="250" :breakpoint="700" bordered content-class="bg-white" >
          <q-list class="q-ma-sm">
            <q-item :active="link === item.ruta" active-class="my-menu-link" v-for="(item, index) in menu" :key="index"  clickable v-ripple @click="ircategoria(item.ruta)" style="border-radius:12px">
              <q-item-section avatar>
                <q-icon :name="item.icon" size="md"></q-icon>
              </q-item-section>
              <q-item-section>{{item.titulo}}</q-item-section>
            </q-item>
          </q-list>
        </q-drawer>

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
  computed: {
    titulo () {
      return this.$route.meta.titulo
    }
  },
  components: {
    FotoPerfil
  },
  data () {
    return {
      link: 0,
      imgPerfil: null,
      logueado: false,
      perfilD: false,
      text: '',
      data: {},
      tab: '',
      usuario_logueado: {},
      baseu: '',
      drawerLeft: false,
      menu: [
        {
          titulo: 'Home',
          icon: 'home',
          ruta: 0
        },
        {
          titulo: 'Explora Destinos',
          icon: 'explore',
          ruta: 1
        },
        {
          titulo: 'Restaurantes y Pubs',
          icon: 'local_dining',
          ruta: 2
        },
        {
          titulo: 'Hospedaje',
          icon: 'hotel',
          ruta: 3
        },
        {
          titulo: 'Transporte',
          icon: 'commute',
          ruta: 4
        },
        {
          titulo: 'Turismo',
          icon: 'streetview',
          ruta: 5
        },
        {
          titulo: 'cerrar sesión',
          icon: 'exit_to_app',
          ruta: 9
        }
      ]
    }
  },
  mounted () {
    this.estaLogueado()
    console.log(this.$route.meta.titulo, 'asdasda')
  },
  methods: {
    ircategoria (numerocategoria) {
      this.link = numerocategoria
      if (numerocategoria === 0) {
        this.$router.push('/home')
      } else if (numerocategoria === 9) {
        this.cerrarsesion()
      } else {
        this.$router.push('/categoria/' + numerocategoria)
      }
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
        console.log(this.usuario_logueado, 'usuario_logueado')
      })
      this.$q.loading.hide()
    }
  }
}
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: $primary;
}
</style>
