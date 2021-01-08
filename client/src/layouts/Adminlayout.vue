<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" color="white" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-3">
      <q-list>
        <q-item v-for="(item, index) in menu" :key="index" clickable v-ripple class="bg-grey-3 q-pa-md" @click="$router.push(item.url)">
            <q-item-section> <q-icon :name="item.icono" size='lg' /></q-item-section>
            <q-item-section> {{ item.titulo }}</q-item-section>
            <q-item-section> {{ item.descripcion }}</q-item-section>
        </q-item>
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
          titulo: 'Usuarios',
          descripcion: '',
          icono: 'account_circle',
          url: '/Userlist'
        },
        {
          titulo: 'Cerrar Sesión',
          descripcion: '',
          icono: 'settings_power',
          url: '/login'
        }

      ],
      leftDrawerOpen: false
    }
  }
}
</script>
