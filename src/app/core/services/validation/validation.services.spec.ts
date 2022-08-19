import { TestBed } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ValidationService} from "./validation.services";

const percent: number = 36;
const cannon: number = 24;
const value: number = 250000000;

describe('ValidationService', () => {
  let service: ValidationService;
  let form: FormGroup;
  let fb: FormBuilder;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    fb = new FormBuilder();
    form = fb.group({
      email: ['', [Validators.required]],
      apellidos: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z ]+$/i),
        ],
      ],
      tipoIdentificacion: ['', [Validators.required]],
      identificacion: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern(/^\d+$/),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.minLength(3),
          Validators.pattern(/^[a-zA-Z ]+$/i),
        ],
      ],
      documentID: [''],
      phoneNumber: ['', [Validators.required]],
      entryDate: '',
      address: '',
      totalValueObject: '',
      totalValueElectr: ''
    });
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test validateError', () => {
    it('show errors', () => {
      form.controls.email.setValue('');
      service.validateError('email', form);
      expect(form.controls.email.errors).toBeTruthy();
    });

    it('dont show errors', () => {
      form.controls.email.setValue('gabriel');
      service.validateError('email', form);
      expect(form.controls.email.errors).toBeFalsy();
    });
  });

  describe('test validateErrorMessage', () => {
    it('has errorMessage', () => {
      form.controls.email.setValue('');
      expect(service.validateErrorMessage('email', form)).toBe(
        'Campo requerido'
      );
    });

    it('hasnt errorMessage', () => {
      form.controls.email.setValue('gabriel');
      expect(service.validateErrorMessage('email', form)).toBe('');
    });

    it('should validate error message the form apellidos maxlength', () => {
      form.controls.apellidos.setValue(
        'is simply dummy text of the printing and typesetting industry'
      );
      expect(service.validateErrorMessage('apellidos', form)).toBe(
        'Excedió la cantidad de caracteres permitidos'
      );
    });

    it('should validate error message the form identiy number', () => {
      form.controls.identificacion.setValue('loremp 1416');
      expect(service.validateErrorMessage('identificacion', form)).toBe(
        'Sólo se permiten números'
      );
    });

    it('should validate error message the form solo se permiten letras', () => {
      form.controls.apellidos.setValue('53535345345');
      expect(service.validateErrorMessage('apellidos', form)).toBe(
        'Sólo se permiten letras'
      );
    });

    it('has errorMessage userInvalid', () => {
      form.controls.documentID.setValue('2438955');
      form.controls.documentID.setErrors({ userInvalid: true });
      expect(service.validateErrorMessage('documentID', form)).toBe(
        'Este documento no cumple con las políticas de asegurabilidad'
      );
    });

    it('has errorMessage userExist', () => {
      form.controls.documentID.setValue('2438955');
      form.controls.documentID.setErrors({ userExist: true });
      expect(service.validateErrorMessage('documentID', form)).toBe(
        'Este documento ya está en su lista de asegurados'
      );
    });

    it('has errorMessage nonDocumentType', () => {
      form.controls.documentID.setValue('');
      form.controls.documentID.setErrors({ nonDocumentType: true });
      expect(service.validateErrorMessage('documentID', form)).toBe(
        'Debe completar este campo para continuar'
      );
    });

    it('has errorMessage emailInvalido', () => {
      form.controls.email.setValue('gabriel');
      form.controls.email.setErrors({ pattern: true });
      expect(service.validateErrorMessage('email', form)).toBe(
        'Email inválido'
      );
    });

    it('has errorMessage errorService', () => {
      form.controls.documentID.setValue('2438955');
      form.controls.documentID.setErrors({ errorService: true });
      expect(service.validateErrorMessage('documentID', form)).toBe(
        'Ingrese un código válido'
      );
    });

    it('has errorMessage invalidDate', () => {
      form.controls.documentID.setValue('2438955');
      form.controls.documentID.setErrors({ invalidDate: true });
      expect(service.validateErrorMessage('documentID', form)).toBe(
        'Seleccione una fecha superior a la de salida.'
      );
    });

    it('should validate error message the form Debe ingresar 10 números', () => {
      form.controls.phoneNumber.setValue('53535345345');
      form.controls.phoneNumber.setErrors({ required: true });
      expect(service.validateErrorMessage('phoneNumber', form)).toBe(
        'Campo requerido'
      );
    });

    it('should validate error message of invalidAddress', () => {
      form.controls.address.setValue('Calle 16454544652gggg');
      form.controls.address.setErrors({ invalidAddress: true });
      expect(service.validateErrorMessage('address', form)).toBe(
        'Dirección no válida.'
      );
    });

    it('should validate error message of minlenghtAddress', () => {
      form.controls.address.setValue('Calle 16');
      form.controls.address.setErrors({ minlenghtAddress: true });
      expect(service.validateErrorMessage('address', form)).toBe(
        'Debe ingresar mínimo 10 caracteres'
      );
    });
  });
});
