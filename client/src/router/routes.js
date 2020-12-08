
const routes = [
  { path: '/', component: () => import('pages/Login.vue') },
  { path: '/registro', component: () => import('pages/Registro.vue') },

  {
    path: '/home',
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
