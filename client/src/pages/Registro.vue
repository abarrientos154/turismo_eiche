<template>
<div>
  <div class="col column items-center justify-center">
    <div class="bg-white q-pa-sm">
      <q-card-section>
        <div class="animated-body row justify-center">
          <div class="fondo-registro" style="width:200px;height:200px;"></div>
        </div>
          <q-form @submit="registrarse()" class="q-gutter-md q-ma-md">
            <div>
              <div class="column items-center justify-center">
                <q-avatar size="180px">
                  <img :src="imgPerfil ? imgPerfil : 'noimg.png'">
                  <q-file borderless v-model="perfilFile" class="absolute-center button-camera" @input="test" accept=".jpg, image/*" style="z-index:1">
                    <q-icon name="photo_camera" class="absolute-center" size="20px" color="white" />
                  </q-file>
                </q-avatar>
                <div class="text-negative text-h7" v-if="$v.perfilFile.$error"> La imagen es Requerida </div>
              </div>
              <q-input outlined class="q-ma-sm" v-model="form.full_name" label="Introduce tu Nombre">
                <template v-slot:prepend>
                  <q-icon name="account_circle" color="primary"></q-icon>
                </template>
              </q-input>
              <q-input outlined class="q-ma-sm" v-model="form.last_name" label="Introduce tu Apellido">
                <template v-slot:prepend>
                  <q-icon name="account_circle" color="primary"></q-icon>
                </template>
              </q-input>
                <q-input outlined class="q-ma-sm" type="email" v-model="form.email" label="Correo electrónico">
                  <template v-slot:prepend>
                    <q-icon name="mail" color="primary"></q-icon>
                  </template>
                </q-input>
                <q-input outlined class="q-ma-sm"
                :type="isPwd ? 'password' : 'text'"
                  v-model="password" label="Contraseña"
                  error-message="las contraseñas deben ser iguales"
                    :error="$v.password.$error" @blur="$v.password.$touch()" >
                  <template v-slot:prepend>
                    <q-icon name="vpn_key" color="primary"></q-icon>
                  </template>
                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd = !isPwd" />
                  </template>
                </q-input>

                <q-input outlined class="q-ma-sm"
                  :type="isPwd2 ? 'password' : 'text'"
                  v-model="password2" label="Confirma tu Contraseña"
                  error-message="las contraseñas deben ser iguales"
                    :error="$v.password2.$error" @blur="$v.password2.$touch()">
                  <template v-slot:prepend>
                    <q-icon name="enhanced_encryption" color="primary"></q-icon>
                  </template>
                  <template v-slot:append>
                    <q-icon :name="isPwd2 ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="primary" @click="isPwd2 = !isPwd2" />
                  </template>
                </q-input>
                  <q-btn class="full-width" size="md" color="primary"  label="Regresar" push @click="$router.go(-1)" />
                  <q-btn class="q-ma-sm full-width" size="md"  color="primary" label="Registrarse" @click="registrarse()" push />
              </div>
          </q-form>
      </q-card-section>
    </div>
  </div>
</div>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'
import env from '../env'
export default {
  data () {
    return {
      form: {},
      perfilFile: null,
      imgPerfil: '',
      baseu: '',
      isPwd: true,
      isPwd2: true,
      loading: false,
      show: false,
      password: '',
      password2: ''
    }
  },
  validations: {
    password: { required },
    password2: {
      sameAsPassword: sameAs('password')
    },
    perfilFile: { required },
    form: {
      email: { required }
    }
  },
  mounted () {
    this.show = true
    this.baseu = env.apiUrl
  },
  methods: {
    async registrarse () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.password2.$error && !this.$v.perfilFile.$error) {
        this.form.password = this.password
        var formData = new FormData()
        var files = []
        files[0] = this.perfilFile
        formData.append('perfil', files[0])
        formData.append('dat', JSON.stringify(this.form))
        await this.$api.post('register', formData, {
          headers: {
            'Content-Type': undefined
          }
        }).then(res => {
          if (res) {
            this.$q.notify({
              message: 'Ya formas parte de Turismo, Bienvenido',
              color: 'positive'
            })
            // this.$router.push('login')
          }
        })
      }
    },
    test () {
      if (this.perfilFile) { this.imgPerfil = URL.createObjectURL(this.perfilFile) }
    }
  }
}
</script>
<style>
.fondo-registro {
  background-image: url('../../../client/public/turismo.png');
  background-size: 100% 100%;
}
</style>
<style scoped lang="scss">
.button-camera {
  text-decoration: none;
  padding: 10px;
  font-weight: 540;
  font-size: 0px;
  color: white;
  background-color: $primary;
  border-radius: 30px;
  border: 1px solid #7e7e7e;
  height:40px;
  width:40px
}
</style>
