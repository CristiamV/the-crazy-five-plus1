import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appAmountFormat]'
})
export class AmountFormatDirective {

  @Input('appAmountFormat') formField: AbstractControl | undefined;
  constructor(private element: ElementRef) {
  }
  @HostListener('input')
  onChange() {    
    this.process(this.element.nativeElement.value);
  }  
  process(value: string) {
    // Obtener el valor del form field y limpiarlo de caracteres     
    value = value.replace(/[^\d]+/g, '');    
    // Dar formato
    const formatter = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,      
      maximumFractionDigits: 2,
   });

    if (value.length >= 2) {
      this.formField?.setValue(formatter.format(Number(value.slice(0, -2) + '.' + value.substring(value.length - 2))));
    }else if (value.length == 1) {   
      if(value == '0'){
        this.formField?.setValue('');
       }
       else{
        this.formField?.setValue(Number('0.0' + value));
       }
    }
    else {
      this.formField?.setValue('');
    }  
 }
}
