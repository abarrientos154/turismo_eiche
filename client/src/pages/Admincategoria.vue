<template>
<div>
  <div class="q-pa-md">
    <q-stepper v-model="step" ref="stepper" color="primary" animated >
      <q-step :name="1" title="Selecciona un Sitio" icon="create_new_folder" :done="step > 1" >
        <q-select rounded filled v-model="SubCategoria" :options="options" label="Selecciona" emit-value map-options />
      </q-step>

      <q-step :name="2" title="Llenar Datos" icon="create_new_folder" :done="step > 2" >
        <div class="column justify-center items-center">
          <div class="q-pa-md">
            <q-card style="width: 450px;border-radius:12px" class="q-ma-sm q-pa-lg shadow-3">
              <div class="text-h6 text-grey-9 text-bold">Ingresa los Datos Correspondientes</div>
              <div class="q-gutter-sm">
                <q-input outlined v-model="form.titulo" label="Introduce el Nombre del Lugar" />
                <q-input outlined v-model="form.descripcion" label="Introduce una Descripcion" />
                <q-file style="max-width: 300px" v-model="filesMaxNumber" outlined label="Imagenes permitidas (10)" multiple
                  max-files="10" accept=".jpg,.png, image/*" @rejected="onRejected" >
                    <template v-slot:prepend>
                      <q-icon name="attach_file" />
                    </template>
                </q-file>
                <div>
                  <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" :withoutDirection="true" />
                </div>
                <div>
                  <q-btn label="Prueba" @click="test" />
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-step>

      <q-step :name="3" title="Finalizar y guardar" icon="add_comment" >
        Presione Finalizar si los datos llenados anteriormente son correctos
      </q-step>
        <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finalizar' : 'Continuar'" />
            <q-btn v-if="step > 1" color="primary" @click="$refs.stepper.previous()" label="Regresar" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
    </q-stepper>
  </div>
  </div>
</template>
<script>
import GoogleMap from '../components/GoogleMap'
export default {
  components: {
    GoogleMap
  },
  data () {
    return {
      center: { lat: 10, lng: 10 },
      type: 1,
      step: 1,
      filesMaxNumber: null,
      SubCategoria: null,
      options: [
        {
          label: 'Ciudades',
          value: 1
        },
        {
          label: 'Ruinas y Lugares históricos',
          value: 2
        },
        {
          label: 'Playas',
          value: 3
        }
      ],
      form: {}
    }
  },
  methods: {
    onRejected (rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: 'negative',
        message: 'No puedes subir mas de 10 imagenes'
      })
    },
    test () {
      console.log(this.markers, 'markers')
    },
    getBounds (bounds, center) {
      console.log(center, 'center')
    }
  }
}
</script>
