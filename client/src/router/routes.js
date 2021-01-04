
const routes = [
  { path: '/', component: () => import('pages/Splash.vue') },
  { path: '/login', component: () => import('layouts/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/listadoplaya', component: () => import('pages/Listados/Listadop.vue') },
      { path: '/listadorestaurante', component: () => import('pages/Listados/Listadores.vue') },
      { path: '/listadohotel', component: () => import('pages/Listados/Listadohot.vue') },
      { path: '/listadoturismo', component: () => import('pages/Listados/Listadotur.vue') },
      { path: '/detalle/:id', component: () => import('pages/Descripciones/Detalle.vue') },
      { path: '/categoria/:id', component: () => import('pages/Categorias.vue') },
      { path: '/listado/:id', component: () => import('pages/Listados/Listado.vue') }

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
