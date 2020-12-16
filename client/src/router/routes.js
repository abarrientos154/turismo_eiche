
const routes = [
  { path: '/', component: () => import('pages/Splash.vue') },
  { path: '/login', component: () => import('layouts/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/listadoplaya', component: () => import('pages/Listados/Listadop.vue') }
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
