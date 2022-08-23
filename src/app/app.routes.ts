import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { InicioComponent } from './modules/dashboard/inicio/inicio.component';
import { HomeComponent } from './modules/home/home.component';
import { TestCapacidadComponent } from './modules/home/pages/test-capacidad/test-capacidad.component';

export const APP_ROUTES: Routes = [  
  {
    path: '',component: HomeComponent    
  },
  {
    path: 'test-capacidad', component: TestCapacidadComponent
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      }
    ]
  },

  // Default route redirect
  {path: '**', redirectTo: ''}
];
