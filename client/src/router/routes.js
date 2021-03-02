
const routes = [
  { path: '/', component: () => import('pages/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    meta: { titulo: '' },
    children: [
      { path: '', component: () => import('pages/Index.vue'), meta: { titulo: 'Home' } },
      { path: '/detalle/:id', component: () => import('pages/Descripciones/Detalle.vue'), meta: { titulo: 'Turismo' } },
      { path: '/categoria/:id', component: () => import('pages/Categorias.vue'), meta: { titulo: 'Categoria' } },
      { path: '/categoria/:id/:subcategoria_id', component: () => import('pages/Categorias.vue'), meta: { titulo: 'Categoria' } },
      { path: '/listado/:id', component: () => import('pages/Listados/Listado.vue'), meta: { titulo: 'Listado' } },
      { path: '/explora', component: () => import('pages/Explora.vue'), meta: { titulo: 'Explora Destino' } }
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
