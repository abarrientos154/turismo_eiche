<template>
<div class="full-width">
  <div class="q-pa-md full-width">
    <q-stepper v-model="step" ref="stepper" color="primary" animated class="full-width" >
      <q-step :name="1" title="Selecciona un Sitio" icon="create_new_folder" :done="step > 1" >
        <q-select rounded filled v-model="SubCategoria" :options="options" label="Selecciona" emit-value map-options />
      </q-step>

      <q-step :name="2" title="Llenar Datos" icon="create_new_folder" :done="step > 2" >
        <div class="column justify-center items-center">
          <div class="q-pa-md">
            <q-card style="width: 800px;border-radius:12px" class="q-ma-sm q-mt-sm q-pa-lg shadow-3">
              <div class="text-h6 text-grey-9 text-bold">Ingresa los Datos Correspondientes</div>
              <div class="q-gutter-sm full-width q-mt-md">
                <q-input outlined v-model="form.titulo" label="Introduce el Nombre del Lugar" />
                <q-input outlined v-model="form.descripcion" label="Introduce una Descripcion" />
                <div class="column">
                  <div>
                    <q-file v-if="files.length < 10" style="max-width: 300px" v-model="file" outlined label="Imagenes permitidas (10)"  accept=".jpg,.png, image/*" @rejected="onRejected" @input="insertarImagen()" >
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                  </div>
                  <div class="row q-mt-sm items-start q-gutter-sm">
                    <q-card v-for="(img, index) in filesT" :key="index">
                      <q-img :src="img" style="width:120px;height:120px">
                        <q-btn icon="delete" style="position:absolute;top:0px;left:0px" flat round color="negative" @click="filesT.splice(index, 1), files.splice(index, 1)" />
                      </q-img>
                    </q-card>
                  </div>
                </div>
                <div>
                  <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" :withoutDirection="true" />
                </div>
                <div>
                  <q-btn label="Prueba" />
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
      baseu: '',
      files: [],
      filesT: [],
      center: { lat: 10, lng: 10 },
      type: 1,
      step: 1,
      file: null,
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
    insertarImagen () {
      this.files.push(this.file)
      this.filesT.push(URL.createObjectURL(this.file))
      this.file = null
      console.log(this.files.length, this.filesT.length, 'aaaaaaa')
    },
    getBounds (bounds, center) {
      console.log(center, 'center')
    }
  }
}
</script>
