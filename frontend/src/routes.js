import Vue from 'vue'
import Verificador from './views/Verificador'
import Vacinacao from './views/Vacinacao'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [    
    {
      path: '/',
      name: 'verificador',
      component: Verificador
    },
    {
      path: '/vacinacao',
      name: 'vacinacao',
      component: Vacinacao
    }
  ]
})

export default router