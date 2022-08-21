import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule , registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
registerLocaleData(es);
@NgModule({
  declarations: [DashboardComponent, InicioComponent],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }],
  exports: [
    DashboardComponent
    ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule      
  ]
})

export class DashboardModule { }
