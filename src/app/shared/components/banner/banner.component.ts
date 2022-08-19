import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  selectedTab:number = 0;

  move(e: any){       
    this.selectedTab = e.to;
  }  
}
