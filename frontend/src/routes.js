import Vue from 'vue'
import Verificador from './views/Verificador'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [    
    {
      path: '/',
      name: 'verificador',
      component: Verificador
    }
  ]
})

export default router