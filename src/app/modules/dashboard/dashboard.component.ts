import { Component, OnInit } from '@angular/core';

import {SessionStorageService} from "../../core/services/session-storage/session-storage.service";
import { environment } from '../../../environments/environment';
import { GlobalVariablesService } from '../../core/services/global-variables/global-variables.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  
  public valid:any;
  get auth() {
    return this.sessionStorage.getJsonValue(environment.keySession);
  }

  constructor(private sessionStorage: SessionStorageService,
    private global: GlobalVariablesService) { }

    ngOnInit(): void {
      this.valid = this.global.getValidError();
      this.global.getValidError();         
    }
}
