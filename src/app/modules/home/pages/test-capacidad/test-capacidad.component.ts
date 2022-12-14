import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-test-capacidad',
  templateUrl: './test-capacidad.component.html',
  styleUrls: ['./test-capacidad.component.scss']
})
export class TestCapacidadComponent implements OnInit {
  answers: any[] = [1, 2, 3, 4];
  questions: Number[] = [1, 2, 3];
  checks!: any[];
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  sendAnswers(){

  }
  mostrarSnakebar(mensaje: string) {
    console.log(this.questions.indexOf);
    this.snackbar.open(mensaje, 'Cerrar', {
      duration: 2500,
      verticalPosition: 'bottom',
      panelClass: 'notif-success'
    });
  }
}
