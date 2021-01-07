<template>
<div>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <div class="bg-primary row justify-center">
        <q-toolbar class="bg-primary text-white rounded-borders">
          <div style="left:0px; position:absolute">
          <q-btn round>
            <q-avatar size="40px">
              <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
            </q-btn>
          </div>
          <div style="right:0px; position:absolute">
            <q-btn round dense icon="settings" size="20px" color="primary" >
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>New tab</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>New incognito tab</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Recent tabs</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>History</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Downloads</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Settings</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Help &amp; Feedback</q-item-section>
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
      tab: ''
    }
  },
  methods: {
    ircategoria (numerocategoria) {
      this.$router.push('/categoria/' + numerocategoria)
      location.href = 'http://localhost:8080/#/categoria/' + numerocategoria
      location.reload()
    }
  }
}
</script>

<style>

</style>
