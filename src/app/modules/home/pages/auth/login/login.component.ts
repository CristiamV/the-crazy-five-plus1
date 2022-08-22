import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SessionStorageService } from '../../../../../core/services/session-storage/session-storage.service';
import { AuthService } from '../../../../../data/services/auth.service';
import { environment } from '../../../../../../environments/environment';
import { ValidationService } from "../../../../../core/services/validation/validation.services";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private tokenSession = environment.keySession;
  errorStatus: boolean = false;
  hide = true;
  hideMail = true;
  loginForm!: FormGroup;
  session = {
    logged: true,
    nombre: '',
    apellido: '',
    mail: '',
    userID: '',
    cedula: ''
  }
  constructor(private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private authService: AuthService,
    private sessionStorage: SessionStorageService,
    private dialog: MatDialog) {
    this.loginForm = this.fb.group({
      emailFormControl: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]]
    });
  }

  /**
  * Valida si el input tiene errores
  * @param item: string
  * @returns retorna un booleano en caso de existir errores
  */
  validateErrorCase(item: string) {
    return this.validationService.validateError(item, this.loginForm);
  }

  /**
   * Obtiene errores de el control que se le pase
   * @param item: string
   * @returns retorna un mensaje de error
   */
  getErrorMessage(item: string) {
    return this.validationService.validateErrorMessage(item,this.loginForm)
  }

  initLogin(email:any): void {
    console.log(email.value);
    this.router.navigate(['/test-capacidad']);
    // const request = {
    //   correo: this.loginForm.controls['emailFormControl'].value,
    //   contrasena: this.loginForm.controls['password'].value
    // }
    // this.authService.login(request)
    //   .subscribe({
    //     next: resp => {
    //       this.postLogin(resp);
    //     },
    //     error: err => {
    //       this.errorStatus = true;
    //       this.session.logged = false;
    //     }
    //   });

  }
  
  

  postLogin(respLogin: any): void {    
    this.errorStatus = false;
    this.session.nombre = respLogin.data.nombre;
    this.session.apellido = respLogin.data.apellido;
    this.session.userID = respLogin.data.id;
    this.session.mail = respLogin.data.correo;
    this.session.cedula = respLogin.data.documento;
    this.sessionStorage.setJsonValue(this.tokenSession, this.session);
    this.router.navigate(['/test-capacidad']);
  }

}