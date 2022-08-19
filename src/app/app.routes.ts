import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home.component';

export const APP_ROUTES: Routes = [  
  {
    path: '',component: HomeComponent    
  },
  {
    path: `inicio`,
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  // Default route redirect
  {path: '**', redirectTo: ''}
];
