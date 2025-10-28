import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   redirectTo: '/login',
  // },
  {
    path: 'layout',
    component: Layout,
  },
];
