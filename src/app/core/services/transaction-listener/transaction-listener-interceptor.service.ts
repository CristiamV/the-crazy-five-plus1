import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { GlobalVariablesService } from '../global-variables/global-variables.service';

const ERROR_CODE = 401;

/**
 * Servicio interceptor de seguridad en las transacciones
 */
@Injectable({
  providedIn: 'root'
})
export class TransactionListenerInterceptorService implements HttpInterceptor {
  constructor(private global: GlobalVariablesService) { }
  /**
   * Función interceptora de peticiones
   * @param request, solicitud con los datos de la petición
   * @param next, permite manejar el request
   * @returns error en caso de existir
   */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    
    return next.handle(request).pipe(
      catchError(err => {
        const url = new URL(err.url);
        const path = url.pathname;
        const obj: any = {
          code: err.status,
          codeName: err.error,
          listError: err
        }

        if (path === '/api/v2/usuario/login') {
          console.error('unauthorized access');
        }else if (err.status >= 500 /*|| err.status === 0*/) {
          this.global.setValidError(true);
          this.global.setStatusError(obj);
        } else {
          this.global.setStatusError(obj);
        }

        return throwError(() => obj);

      })      
    );
  }
}
