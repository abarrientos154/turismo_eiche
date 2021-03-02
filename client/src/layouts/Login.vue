<template>
<div>
  <div class="fullscreen bg-white no-box-shadow">
          <div class="row q-pa-xl justify-center items-center no-box-shadow">
            <div class="column no-box-shadow">
              <div class="row q-pa-sm justify-center">
                  <div class="fondo" style="width:200px;height:200px;"></div>
              </div>
              <div class="col-xs-12 col-sm-6 q-ma-sm col-md-6 col-lg-6">
                <q-input type="email" v-model="form.email" placeholder="Ingrese su email" autofocus outlined :error="$v.form.email.$error" error-message="Este campo es requerido" @blur="$v.form.email.$touch()" >
                  <template v-slot:append>
                    <q-icon name="mail" color= "primary"></q-icon>
                  </template>
                </q-input>
                  <q-input :type="isPwd ? 'password' : 'text'" v-model="form.password" placeholder="Ingrese su contraseña" outlined :error="$v.form.password.$error" error-message="Este campo es requerido" @blur="$v.form.password.$touch()" >
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
              <div class="col-xs-12 col-sm-6 q-ma-sm col-md-6 col-lg-6">
                <q-btn
                  class="full-width"
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
              <div class="col-xs-12 col-sm-6 q-ma-sm col-md-6 col-lg-6">
                <q-btn label="registrate aqui" class="full-width" color="primary" @click="$router.push('/registro')" />
              </div>
              <div class="colunm justify-center q-pa-md">
                <p align="center" style="cursor:pointer"><a class="text-bold text-primary" @click="$router.push('/slider')">Omitir</a></p>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {},
      url: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/79414467_2771389276250882_1004081934109769728_o.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=qjDifa0Tr40AX_b1_R4&_nc_ht=scontent-mia3-1.xx&oh=c1533504c6b6a98bf7065d2e80b6b44c&oe=605A23AF',
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
            this.user = res.TUR_SESSION_INFO
            console.log('user', this.user)
            if (this.user.estatus === 1 || this.user.roles[0] === 1) { // si el estatus es 1 o el rol es admin puede iniciar sesion
              this.login(res)
              if (this.user.roles[0] === 1) {
                this.$router.push('/Userlist')
              } else if (this.user.roles[0] === 2) {
                this.$router.push('/slider')
              }
            } else {
              this.$q.notify({
                message: 'Usuario Bloqueado ponganse en contacto con algun administrador',
                color: 'negative'
              })
            }
          } else {
            console.log('error de ususario')
            this.loading = false
            this.$q.loading.hide()
          }
          this.$q.loading.hide()
          this.loading = false
        })
      }
    }
  }
}
</script>
<style>
.fondo {
  background-image: url('../../../client/public/turismo.png');
  background-size: 100% 100%;
}
</style>
