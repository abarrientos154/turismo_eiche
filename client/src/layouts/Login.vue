<template>
  <div class="fullscreen row justify-center items-center bg-grey-3">
    <q-card style="width: 450px;border-radius:12px" class="q-ma-sm q-pa-lg shadow-3">
    <q-card-section align="center">
                <div class="row justify-center">
                  <q-img
                    style="width:250px"
                src="~assets/quasar-logo-full.svg"
                  ></q-img>
                </div>
                <div class="text-h6 text-grey-9 text-bold">¡Bienvenido!</div>
                <div class="row justify-center q-py-xs">
                <q-input
                  style="margin: auto;
                  width: calc(50% - 90px);
                  min-width: 200px;
                  max-width: 300px;"
                  type="email"
                  v-model="form.email"
                  placeholder="Ingrese su email"
                  autofocus
                  outlined
                  :error="$v.form.email.$error"
                  error-message="Este campo es requerido"
                  @blur="$v.form.email.$touch()"
                >
                  <template v-slot:append>
                    <q-icon name="mail" color= "primary"></q-icon>
                  </template>
                </q-input>
                </div>

                <div class="row justify-center">
                <q-input
                  style="margin: auto;
                  width: calc(50% - 90px);
                  min-width: 200px;
                  max-width: 300px;"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="form.password"
                  placeholder="Ingrese su contraseña"
                  outlined
                  :error="$v.form.password.$error"
                  error-message="Este campo es requerido"
                  @blur="$v.form.password.$touch()"
                >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    color= "primary"
                    @click="isPwd = !isPwd"
                  />
                </template>
                </q-input>
                </div>
                <div class="row justify-center">
                <div class="text-h9 text-grey-9 text-bold">¿Olvidaste la contraseña?</div>
                </div>
                <div class="row justify-center q-pa-md">

                  <q-btn
                    icon-right="arrow_right"
                    color="primary"
                    :loading="loading"
                    @click="onSubmit()"
                  >Ingresar
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-center" />
                      Loading...
                    </template>
                  </q-btn>
                </div>
                <div class="row justify-center">
                  <q-btn label="registrate aqui" color="primary" @click="$router.push('/registro')" />
                </div>
              </q-card-section>
              <div class="row absolute-bottom justify-center q-py-sm">
                  <div class="q-px-sm text-subtitle2 text-grey">Términos y condiciones de uso</div>
                </div>
            </q-card>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false,
      lorem: 'rfrefrtfretfr',
      user: {}
    }
  },
  validations: {
    form: {
      email: { required },
      password: { required }
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    ...mapActions('generals', ['saveUser']),
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.form.$error) {
        this.loading = true
        this.$q.loading.show({
          message: 'Iniciando sesión'
        })
        this.$api.post('login', this.form).then(res => {
          if (res) {
            this.user = res.info
            console.log('user', this.user)
            this.login(res)
            if (this.user.roles[0] === 1) {
              this.$router.push('inicio_admin')
            } else if (this.user.roles[0] === 2) {
              this.$router.push('home')
            }
          } else {
            console.log('error de ususario')
            this.loading = false
            this.$q.loading.hide()
          }
          this.$q.loading.hide()
        })
      }
    }
  }
}
</script>
<style>
  .fondo {
  background-image: url("../../public/images.jpg");
  background-size: cover;
}
</style>
