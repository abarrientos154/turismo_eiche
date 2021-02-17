
const routes = [
  { path: '/', component: () => import('pages/Splash.vue') },
  { path: '/login', component: () => import('layouts/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/detalle/:id', component: () => import('pages/Descripciones/Detalle.vue') },
      { path: '/categoria/:id', component: () => import('pages/Categorias.vue') },
      { path: '/listado/:id', component: () => import('pages/Listados/Listado.vue') },
      { path: '/explora', component: () => import('pages/Explora.vue') }
    ]
  },
  {
    path: '/admindhome',
    component: () => import('layouts/Adminlayout.vue'),
    children: [
      { path: '/Acategoria', component: () => import('pages/Admincategoria.vue') },
      { path: '/Userlist', component: () => import('pages/Usuariolist.vue') },
      { path: '/adminlist', component: () => import('pages/Listados/Listadoadmin.vue') },
      { path: '/detalleadmin/:id', component: () => import('pages/Descripciones/Detalleadmin.vue') },
      { path: '/Opiniones', component: () => import('pages/Listadoopinion.vue') }
    ]
  },
  { path: '/registro', component: () => import('pages/Registro.vue') },
  { path: '/slider', component: () => import('pages/Slider.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
