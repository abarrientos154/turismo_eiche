<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="white" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-blue-grey-1">
        <div class="row q-pa-sm">
        <q-avatar>
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHCQqgT6tN4bw/company-logo_200_200/0/1573081440419?e=1618444800&v=beta&t=y2P5zu6usYekLer9uU0WP3G28Dvx3l3Josx_EHxDOG4">
        </q-avatar>
        <div class="q-pa-md text-h7 text-grey-9 text-bold">EICHE</div>
        </div>
      <q-list class="column">
        <q-item v-for="(item, index) in menu" :key="index" clickable v-ripple class="bg-blue-grey-1 q-pa-md" @click="$router.push(item.url)">
            <q-item-section> <q-icon :name="item.icono" size='xl' /></q-item-section>
            <q-item-section> {{ item.titulo }}</q-item-section>
            <q-item-section> {{ item.descripcion }}</q-item-section>
        </q-item>
        <div class="row">
        <q-item clickable v-ripple class="bg-blue-grey-1 q-pa-md" @click="cerrarsesion()">
           <q-item-section> <q-icon name="settings_power" size='xl' /></q-item-section>
            <q-item-section class="q-pl-md"> {{ "Cerrar Sesión" }}</q-item-section>
        </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      menu: [
        {
          titulo: 'Explora Destinos',
          descripcion: '',
          icono: 'explore',
          url: '/adminlist'
        },
        {
          titulo: 'Opiniones',
          descripcion: '',
          icono: 'local_dining',
          url: '/Opiniones'
        },
        {
          titulo: 'Usuarios',
          descripcion: '',
          icono: 'account_circle',
          url: '/Userlist'
        }

      ],
      leftDrawerOpen: false
    }
  },
  methods: {
    cerrarsesion () {
      localStorage.removeItem('TUR_SESSION_INFO')
      this.$q.notify({
        message: 'Sesion cerrada con exito',
        color: 'positive'
      })
      this.$router.push('/login')
    }
  }
}
</script>
