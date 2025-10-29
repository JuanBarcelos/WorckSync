import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path:"dashboard",
        component: Dashboard
      },
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: '/login',
  // },
];
