'use strict'

/*
|--------------------------------------------------------------------------
| Routes
  Existen 2 grupos de rutas: Las que necesitan autenticación del usuario y las que no. TOMAR MUY EN CUENTA ESTO
  Dentro del grupo de las que necesitan autenticación se debe especificar el middleware para verificar si el
  usuario(autenticado) tiene el permiso para acceder a esa ruta. Ejemplo: .middleware('verifyPermission:1')
  El número 1 indica el permiso que debe tener para acceder a esa ruta
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

const addPrefixToGroup = group => {
  // Grupo para rutas con prefijo /api/
  group.prefix("api");
  return group;
};


addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas sin protección de autenticación aquí
    Route.post("login", "UserController.login");
    Route.post("register", "UserController.register")
    Route.get("validate_email/:email", "UserController.validateEmail")
    Route.get("categoria", "CategoriaController.index")
    Route.get("sub", "SubCategoriaController.index")
    Route.get("idsub/:id", "SubCategoriaController.show")
    Route.get("turismo", "TurismoController.index")
    Route.get("turis/:id", "TurismoController.show")
    Route.get("detalle/:id", "TurismoController.busquedabyid")
    Route.get("opiniones/:id_turismo", "OpinionController.index")
    Route.post("opinion/:id_turismo", "OpinionController.store")
    Route.get("validar_estatus_logueo", "UserController.validarLogueoEstatus") // valida si esta logueado y si el estatus
    Route.get("obtener_imagen/:file", "UploadController.obtenerImagen") // trae la primera imagen de las subcategorias
  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí
    Route.get("usuarios", "UserController.index")
    Route.get("desbloquear/:id", "UserController.desbloquearusuario")
    Route.get("bloquear/:id", "UserController.bloquearusuario")
    Route.get("categorialist", "TurismoController.listadoadmind")
    Route.get("detalleadmin/:id", "TurismoController.busquedabyid")
    Route.post("explora_destino", "TurismoController.store")
    Route.delete("turismo/:id", "TurismoController.destroy")
    Route.delete("opi/:id", "OpinionController.destroy")

  }).middleware("auth")
);
