import {FormGroup} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateError(item: string, form: FormGroup) {
    return (form.controls[item].errors && form.controls[item].touched );
  }

  /**
   * Valida y retorna el error del Nombre y apellidos
   * @param item
   * @returns string
   */
  validateInputType(item: string): string {
    if (item === 'apellidos' || item === 'name' || item === 'lastName' || item == 'nombreFormControl' || item == 'apellidoFormControl' || item == 'namePrintedCardFormControl' || item == 'postalCodeFormControl') {
      return 'Sólo se permiten letras';
    } else if (item === 'email' || item === 'emailFormControl') {
      return 'Email inválido';
    }else if (item === 'yearExpirationFormControl'){
      return 'Año inválido';
    }else if ( item === 'monthExpirationFormControl'){
      return 'Mes inválido';
    }else if ( item === 'newPassFormControl'){
      return 'Contraseña debe tener al menos una letra mayúscula, un numero y un caracter especial.';
    }else {
      return 'Sólo se permiten números';
    } 
  }

  validateErrorPersonalizado(item:string, errType:string, msj:string, form:FormGroup){
    if(form.controls[item]?.hasError(errType)){
      return msj;
    }

    if(form.controls[item]?.hasError('maxlength')) {
      return 'Excedió la cantidad de caracteres permitidos';
    }

    if(form.controls[item]?.hasError('minlength')) {      
      return `Debe ingresar mínimo ${form.controls[item].errors?.["minlength"].requiredLength} caracteres`;
    }

    if(form.controls[item]?.hasError('email')) {
      return 'Correo no valido';
    }

    if (form.controls[item]?.hasError('pattern')) {      
      return this.validateInputType(item);
    }

    return '';
  }

  validateErrorMessage(item: string, form: FormGroup) {

    if (form.controls[item]?.hasError('pattern')) {      
      return this.validateInputType(item);
    }

    if (form.controls[item]?.hasError('nonDocumentType')) {
      return 'Debe completar este campo para continuar';
    }

    if(form.controls[item]?.hasError('userInvalid')) {
      return 'Este documento no cumple con las políticas de asegurabilidad';
    }

    if(form.controls[item]?.hasError('userExist')) {
      return 'Este documento ya está en su lista de asegurados';
    }

    if(form.controls[item]?.hasError('maxlength')) {
      return   'Excedió la cantidad de caracteres permitidos';
    }

    if(form.controls[item]?.hasError('minlength')) {      
      return   `Debe ingresar mínimo ${form.controls[item].errors?.["minlength"].requiredLength} caracteres`;
    }

    if(form.controls[item]?.hasError('required')) {
      switch (item) {
        case "mercantilAccountFormControl":          
          return'Ingresa el nro. de cuenta Mercantil ';          
        case "beneficiaryNumberFormControl":          
          return'Ingresa el doc. de identidad'; 
        case "nombreBeneficiaryFormControl":          
          return'Ingresa el alias del beneficiario';
        default:
          return'Campo requerido';
      }
      
    }

    if(form.controls[item]?.hasError('errorService')) {      
      return 'Ingrese un código válido';
    }

    if(form.controls[item]?.hasError('invalidDate')) {
      return 'Seleccione una fecha superior a la de salida.';
    }

    if(form.controls[item]?.hasError('invalidAddress')) {
      return 'Dirección no válida.';
    }

    if(form.controls[item]?.hasError('minlenghtAddress')) {
      return 'Debe ingresar mínimo 10 caracteres';
    }
    if(form.controls[item]?.hasError('email')) {
      return 'Dirección no válida';
    }
    /****ERORES PERSONALIZADOS**/
    if(form.controls[item]?.hasError('emailExists')) {
      return 'El correo ya existe';
    }
    if(form.controls[item]?.hasError('confirmEmailMatch')) {
      return 'Los correos no coinciden';
    }   
    if(form.controls[item]?.hasError('phoneExists')) {
      return 'El número ya existe';
    }
    if(form.controls[item]?.hasError('bankCodeFail')) {
      return 'El nro. de cuenta es inválido';
    }    
    if(form.controls[item]?.hasError('badFormat')) {
      return 'La información es incorrecta';
    }
    if(form.controls[item]?.hasError('docExists')) {
      return 'El documento ya existe';
    }
    if(form.controls[item]?.hasError('checkBeneficiary')) {
      return 'La información es incorrecta';
    }
    if(form.controls[item]?.hasError('confirmPassMatch')) {
      return 'Las contraseñas no coinciden';
    }
    return '';
  }


}
