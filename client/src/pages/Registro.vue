<template>
  <q-layout class="fondo">
    <q-page-container>
      <q-page class="row justify-center">
         <div class="col column items-center justify-center">
          <q-card class="shadow-3 q-pa-md clar" style="border-radius:13px ">

            <q-card-section>
             <div class="animated-body row justify-center" v-show="show">
              <img
                src="~assets/quasar-logo-full.svg"
                alt="Logo HEvent"
                style="width: 80%;"
              >
            </div>
          <q-form
            @submit="registrarse()"
            class="q-gutter-md q-ma-md"
          >
          <div class="animated-body" v-show="show">
              <q-input outlined class="q-ma-sm gray" v-model="form.full_name" label="Introduce tu Nombre">
                <template v-slot:prepend>
                  <q-icon name="account_circle" color="black"></q-icon>
                </template>
              </q-input>
              <q-input outlined class="q-ma-sm gray" v-model="form.last_name" label="Introduce tu Apellido">
                <template v-slot:prepend>
                  <q-icon name="account_circle" color="black"></q-icon>
                </template>
              </q-input>
            </div>
            <div class="animated-body" v-show="show">
              <q-input outlined class="q-ma-sm gray" type="email" v-model="form.email" label="Correo electrónico">
                <template v-slot:prepend>
                  <q-icon name="mail" color="black"></q-icon>
                </template>
              </q-input>
            <div class="animated-body" v-show="show">
                <q-input outlined class="q-ma-sm gray" mask="(####) ### - ####" v-model="form.phone" label="Ingresa tu Teléfono *" unmasked-value>
                    <template v-slot:prepend>
                  <q-icon name="local_phone" color="black"></q-icon>
                </template>
              </q-input>
              </div>
            </div>
            <div class="animated-body" v-show="show">

              <q-input outlined class="q-ma-sm"
              :type="isPwd ? 'password' : 'text'"
               v-model="password" label="Contraseña"
                error-message="las contraseñas deben ser iguales"
                 :error="$v.password.$error" @blur="$v.password.$touch()" >
                <template v-slot:prepend>
                  <q-icon name="vpn_key" color="black"></q-icon>
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="black" @click="isPwd = !isPwd" />
                </template>
              </q-input>

              <q-input outlined class="q-ma-sm"
               :type="isPwd ? 'password' : 'text'"
               v-model="password2" label="Confirma tu Contraseña"
                error-message="las contraseñas deben ser iguales"
                 :error="$v.password2.$error" @blur="$v.password2.$touch()">
                <template v-slot:prepend>
                  <q-icon name="enhanced_encryption" color="black"></q-icon>
                </template>
                <template v-slot:append>
                  <q-icon :name="isPwd ? 'visibility' : 'visibility_off'" class="cursor-pointer" color="black" @click="isPwd = !isPwd" />
                </template>
              </q-input>

            </div>
            <div class="animated-body" v-show="show">
              <div class="text-center q-ma-sm">
                <q-btn color="black" icon="forward" label="Registrarse" @click="registrarse()" push />
              </div>
            </div>
          </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {},
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
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    registrarse () {
      console.log(this.form, 'form')
      this.$api.post('register', this.form).then(res => {
        if (res) { // si el registro fue correcto entro
          this.$router.go(-1) // y lo regreso para el login, esta funcion es para volver atras entonces obvio si estoy en el registro atras esta el login
          this.$q.notify({ // esto es para mostrar un mensaje flotante
            message: 'Ya formas parte del Proyecto, Bienvenido',
            color: 'positive'
          })
        }
      })
    }
  }
}
</script>
<style>
.clar {
  background-color: rgba(139, 139, 139, 0.808);
  }
</style>
