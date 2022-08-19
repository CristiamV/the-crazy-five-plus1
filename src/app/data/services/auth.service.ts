import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../../core/services/session-storage/session-storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSession = environment.keySession;
  private baseApi = environment.baseApi;  

  constructor(private http: HttpClient,
    private sessionStorage: SessionStorageService) { }

  verificaAutenticacion() {
    if (!this.sessionStorage.getJsonValue(this.tokenSession)) {
      return false;
    }
    return true;
  }

  login(request:any): Observable<any>{
    return this.http.post(`${this.baseApi}/usuario/login`, request)
  } 

}
