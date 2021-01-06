
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
      { path: '/listado/:id', component: () => import('pages/Listados/Listado.vue') }

    ]
  },
  {
    path: '/admindhome',
    component: () => import('layouts/Adminlayout.vue'),
    children: [
      { path: 'Acategoria', component: () => import('pages/Admincategoria.vue') }
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
