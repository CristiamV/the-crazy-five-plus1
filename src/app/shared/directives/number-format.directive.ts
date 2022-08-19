import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appNumberFormat]'
})
export class NumberFormatDirective {

  @Input('appNumberFormat') formField: AbstractControl | undefined;
  constructor(private element: ElementRef) {
  }
  @HostListener('input')
  onChange() {    
    this.process(this.element.nativeElement.value);
  }  
  process(value: string) {
    // Obtener el valor del form field y limpiarlo de caracteres     
    value = value.replace(/[^\d]+/g, '');        
    this.formField?.setValue(value);  
 }
}
