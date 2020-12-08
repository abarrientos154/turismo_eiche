
const routes = [
  { path: '/registro', component: () => import('pages/Registro.vue') },
  { path: '/login', component: () => import('pages/Login.vue') },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
