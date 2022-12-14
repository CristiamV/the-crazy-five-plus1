import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { APP_ROUTES } from "./app.routes";
import { TransactionListenerInterceptorService } from './core/services/transaction-listener/transaction-listener-interceptor.service';
import { HomeComponent } from './modules/home/home.component';
import { AuthModule } from './modules/home/pages/auth/auth.module';
import { TestCapacidadModule } from './modules/home/pages/test-capacidad/test-capacidad.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AuthModule,
    TestCapacidadModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
  ],
  providers: [{
    provide: [HTTP_INTERCEPTORS, LOCALE_ID],
    useValue: "es-ES",
    useClass: TransactionListenerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
