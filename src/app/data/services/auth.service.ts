import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSession = environment.keySession;
  private baseApi = environment.baseApi;  

  constructor(private http: HttpClient,
    ) { }

  login(id:number): Observable<any>{
    return this.http.get(`${this.baseApi}/user/${id}`)
  } 

}
