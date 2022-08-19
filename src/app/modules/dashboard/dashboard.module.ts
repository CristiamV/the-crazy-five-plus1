import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule , registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
registerLocaleData(es);
@NgModule({
  declarations: [DashboardComponent],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }],
  exports: [
    DashboardComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule   
  ]
})

export class DashboardModule { }
