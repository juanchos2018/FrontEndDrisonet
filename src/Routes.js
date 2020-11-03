import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';

import ErrorPage from '@/pages/Error/Error';
// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import PacienteChat from '@/pages/Pacientes/PacienteChat';
import Publicaciones from '@/pages/Publicaciones/Publicaciones';
import PublicacionesLista from '@/pages/Publicaciones/PublicacionesLista';

import Registro from '@/pages/Registro/Registro';
import RegistroEmpresa from '@/pages/Registro/RegistroEmpresa';
import Chat from '@/pages/Chat/Chat';

import Solicitudes from '@/pages/Solicitudes/Solicitudes';

Vue.use(Router);

//952341137  


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/registro',
      name: 'Registro',
      component: RegistroEmpresa,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'inicio',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'chat',
          name: 'chat',
          component: Chat,
        },
        {
          path: 'publicaciones',
          name: 'publicaciones',
          component: Publicaciones,
        },
        {
          path: 'publicacioneslista',
          name: 'publicacioneslista',
          component: PublicacionesLista,
        },
        {
          path: 'registro',
          name: 'registro',
          component: Registro,
        },
      
      
      
        {
          path: 'Solicitudes/:id',
          name: 'Solicitudes',
          component: Solicitudes,
        },
       
        {//  path: 'components/comprobantesdetalle/:id',
          path: 'pacienteschat/:id_usuario',
          name: 'pacienteschat',
          component: PacienteChat
        },
        
      ],
    },
  ],
});
