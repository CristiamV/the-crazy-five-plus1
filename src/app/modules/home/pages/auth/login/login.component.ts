import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
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
    this.router.navigate(['/test-capacidad']);   

  }
  
  


}