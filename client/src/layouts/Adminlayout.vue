<template>
  <div>
  <q-layout view="lHh Lpr lFf">
    <div class="bg-primary row justify-center">
      <div style="left:0px; position:absolute">
        <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
      </div>
      <div>
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>
        </q-input>
      </div>
      <div style="right:0px; position:absolute">
        <q-btn icon="settings" flat round />
      </div>
    </div>
    <q-drawer v-model="drawerLeft" :width="300" :breakpoint="700" bordered content-class="bg-grey-7" >
      <q-list class="q-ma-sm">
        <q-item v-for="(item, index) in menu" :key="index"  clickable v-ripple class="bg-white" @click="$router.push(item.ruta)" style="border-radius:12px">
          <q-item-section>
            <q-item-label class="text-bold">{{item.titulo}}</q-item-label>
            <q-item-label class="text-bold" caption>{{item.descripcion}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      data: {},
      tab: '',
      drawerLeft: false,
      menu: [
        {
          titulo: 'Crear Tareas',
          descripcion: 'nael es mrk 1',
          ruta: '/crud'
        },
        {
          titulo: 'Crear Productos',
          descripcion: 'nael es mrk 2',
          ruta: '/listado'
        },
        {
          titulo: 'Crear Negocios',
          descripcion: 'nael es mrk 3',
          ruta: '/negocio'
        },
        {
          titulo: 'Crear Ventas',
          descripcion: 'nael es mrk 4',
          ruta: '/ventas'
        }
      ]
    }
  }
}
</script>

<style>

</style>
