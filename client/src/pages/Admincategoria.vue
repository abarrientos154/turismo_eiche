<template>
<div>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Selecciona una SubCategoria"
        icon="create_new_folder"
        :done="step > 1"
      >
       <q-select rounded filled v-model="SubCategoria" :options="options" label="Selecciona" />
      </q-step>

      <q-step
        :name="2"
        title="Selecciona una SubCategoria"
        icon="create_new_folder"
        :done="step > 2"
      >
        <div class="column justify-center items-center">
          <div class="q-pa-md">
    <q-card style="width: 450px;border-radius:12px" class="q-ma-sm q-pa-lg shadow-3">
                      <div class="text-h6 text-grey-9 text-bold">Ingresa los Datos Correspondientes</div>
              <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md">
              <q-input outlined v-model="form.titulo" label="Introduce el Nombre del Lugar" />
              <q-input outlined v-model="form.descripcion" label="Introduce una Descripcion" />
              <q-file
                  style="max-width: 300px"
                  v-model="filesMaxNumber"
                  outlined
                  label="Imagenes permitidas (10)"
                  multiple
                  max-files="10"
                  accept=".jpg,.png, image/*"
                  @rejected="onRejected" >
                  <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
                </q-file>
            </form>
             </q-card>
          </div>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Finalizar y guardar"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finalizar' : 'Continuar'" />
          <q-btn v-if="step > 1" color="primary" @click="$refs.stepper.previous()" label="Regresar" class="q-ml-sm" />
            <q-btn label="Limpiar Campos" push color="primary" text-color="white" @click="reset" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      step: 1,
      filesMaxNumber: null,
      SubCategoria: null,
      options: [
        'Ciudades', 'Ruinas y Lugares históricos', 'Playas'
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
    reset () {
      this.form.titulo = ''
      this.form.descripcion = ''
      this.filesMaxNumber = ''
      this.SubCategoria = ''
    }
  }
}
</script>
