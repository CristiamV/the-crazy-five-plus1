import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../../core/services/global-variables/global-variables.service';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: ['./validation-errors.component.scss']
})
export class ValidationErrorsComponent implements OnInit {

  constructor(private global: GlobalVariablesService) { }

  public code:any;
  ngOnInit(): void {
    this.code = this.global.getStatusError();
  }

  volver(){
    this.global.setValidError(false);
  }

}
