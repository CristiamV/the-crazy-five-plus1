import { Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AuthGuard } from './core/guards/auth.guard';

export const APP_ROUTES: Routes = [  
  {
    path: `inicio`,
    loadChildren: () =>
    import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  }
];
