import { Component, OnInit } from '@angular/core';
import { GlobalVariablesService } from '../../core/services/global-variables/global-variables.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public valid: any;

  constructor(private global: GlobalVariablesService) { }
  aplicationError: boolean = true;

  ngOnInit(): void {
    this.valid = this.global.getValidError();
    this.global.getValidError();      
  }


}
