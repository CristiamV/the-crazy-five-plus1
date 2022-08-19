import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {

  obj:any = {
    code: 0,
    codeName: "",
    listError: ""
  }

  private sourceBehaviour = new BehaviorSubject<boolean>(false);
  private objBehaviout = new BehaviorSubject<string>(this.obj);
  private cardNumber = new BehaviorSubject<any>(0);
  private chartsValues = new BehaviorSubject<any>("");
  private chartsKeys = new BehaviorSubject<any>("");

  getShowChartsValues():any{
    return this.chartsValues;
  }

  getShowChartsKeys():any{
    return this.chartsKeys;
  }

  getValidError() {
    return this.sourceBehaviour;
  }

  getStatusError() {
    return this.objBehaviout;
  }

  getCardNumber(){
    return this.cardNumber;
  }

  setChartsValues(value:any){
    return this.chartsValues.next(value);
  }

  setChartsKeys(value:any){
    return this.chartsKeys.next(value);
  }

  setCardNumber(value:any){
    return this.cardNumber.next(value);
  }

  setValidError(value: boolean) {
    return this.sourceBehaviour.next(value);
  }

  setStatusError(value: any) {
    return this.objBehaviout.next(value);
  }
}
