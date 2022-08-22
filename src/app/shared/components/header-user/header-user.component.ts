import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
  username : string;

  constructor() { 
    this.username = "Isabel Hernandez"
  }

  ngOnInit() {
  }

}
