<template>
<div>
  <q-layout>
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
                  <q-icon name="account_circle" color="primary"></q-icon>
                </template>
              </q-input>
              <q-input outlined class="q-ma-sm gray" v-model="form.last_name" label="Introduce tu Apellido">
                <template v-slot:prepend>
                  <q-icon name="account_circle" color="primary"></q-icon>
                </template>
              </q-input>
            </div>
            <div class="animated-body" v-show="show">
              <q-input outlined class="q-ma-sm gray" type="email" v-model="form.email" label="Correo electrónico">
                <template v-slot:prepend>
                  <q-icon name="mail" color="primary"></q-icon>
                </template>
              </q-input>
            <div class="animated-body" v-show="show">
                <q-input outlined class="q-ma-sm gray" mask="(####) ### - ####" v-model="form.phone" label="Ingresa tu Teléfono *" unmasked-value>
                    <template v-slot:prepend>
                  <q-icon name="local_phone" color="primary"></q-icon>
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

            </div>
            <div class="animated-body" v-show="show">
              <div class="text-center q-ma-sm">
                <q-btn size="md" color="primary" icon="arrow_back" label="Regresar" push @click="$router.go(-1)" />
                <q-btn size="md"  color="primary" icon="east" label="Registrarse" @click="registrarse()" push />
              </div>
            </div>
          </q-form>
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</div>
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
    },
    form: {
      email: { required }
    }
  },
  mounted () {
    this.show = true
  },
  methods: {
    registrarse () {
      this.$v.$touch()
      if (!this.$v.form.$error && !this.$v.password.$error && !this.$v.password2.$error) {
        this.form.password = this.password
        this.$api.post('register', this.form).then(res => {
          if (res) {
            this.$router.go(-1)
            this.$q.notify({
              message: 'Ya formas parte del Proyecto, Bienvenido',
              color: 'positive'
            })
          }
        })
      }
    }
  }
}
</script>
<style>
.clar {
  background-color: rgba(253, 249, 249, 0.808);
  }
</style>
