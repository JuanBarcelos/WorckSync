import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';

export const routes: Routes = [
  {
    path:"",
    component: Login
  },
  {
    path:"layout",
    component: Layout
  }
];
