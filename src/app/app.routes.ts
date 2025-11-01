import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Employees } from './pages/employees/employees';
import { Shift } from './pages/shift/shift';
import { DataImport } from './pages/data-import/data-import';

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
        path: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'employees',
        component: Employees,
      },
      {
        path: 'shift',
        component: Shift,
      },
      {
        path: 'data-imports',
        component: DataImport,
      },
    ],
  },
  // {
  //   path: '**',
  //   redirectTo: '/login',
  // },
];
