
const routes = [
  { path: '/', component: () => import('layouts/Login.vue') },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }

    ]
  },
  { path: '/registro', component: () => import('pages/Registro.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
