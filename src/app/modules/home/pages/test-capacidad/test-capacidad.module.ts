import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestCapacidadComponent } from './test-capacidad.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TestCapacidadComponent
  ],
  exports:[
    TestCapacidadComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TestCapacidadModule { }
