<template>
<div>
  <q-card class="q-pa-md column q-ma-md items-center q-gutter-md absolute-center" style="width:500px">
    <div class="text-h6 text-grey-9 text-bold">Ingresa los Datos Correspondientes</div>
    <div class="full-width">
      <q-select outlined v-model="form.subCategoria_id" :options="options" label="Selecciona" emit-value map-options />
    </div>
    <div class="full-width">
      <q-input outlined v-model="form.nombre" label="Introduce el Nombre del Lugar" />
    </div>
    <div class="full-width">
      <q-input outlined v-model="form.descripcion" label="Introduce una Descripcion" />
    </div>
    <div class="column full-width">
      <div class="full-width">
        <q-file v-if="files.length < 10" style="max-width: 300px" v-model="file" outlined label="Imagenes permitidas (10)"  accept=".jpg,.png, image/*" @input="insertarImagen()" >
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
    <div class="full-width">
      <google-map :type="type" :center="center" :zoom="10" @getBounds="getBounds" @newPlace="handleNewPlace" :withoutDirection="true" />
    </div>
    <q-card-actions>
      <q-btn label="Guardar" @click="guardar" color="primary" />
    </q-card-actions>
  </q-card>
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
      center: { lat: -33.4504117, lng: -70.6707553 },
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
  mounted () {
    this.form.ubicacion = this.center
  },
  methods: {
    insertarImagen () {
      this.files.push(this.file)
      this.filesT.push(URL.createObjectURL(this.file))
      this.file = null
      console.log(this.files.length, this.filesT.length, 'aaaaaaa')
    },
    getBounds (bounds, center) {
      console.log(center, 'center')
    },
    handleNewPlace (place, coordinates) {
      console.log('handleNewPlace', coordinates)
      this.form.ubicacion = coordinates
    },
    async guardar () {
      console.log(this.form, 'formulario')
      if (this.files.length > 0) {
        var formData = new FormData()
        this.form.cantidadArchivos = this.files.length
        for (let i = 0; i < this.files.length; i++) {
          formData.append('turismoFiles_' + i, this.files[i])
        }
        formData.append('dat', JSON.stringify(this.form))
        await this.$api.post('explora_destino', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Agregado Con Exito',
              color: 'positive'
            })
            this.$router.push('/Userlist')
          }
        })
      } else {
        this.$q.dialog({
          message: 'Debes subir fotos del Lugar.',
          persistent: true
        }).onOk(() => {
        })
      }
    }
  }
}
</script>
