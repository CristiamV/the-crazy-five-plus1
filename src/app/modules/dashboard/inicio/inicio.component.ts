import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  categories = ["Diseno", "FrontEnd", "BackEnd", "Arquitectura", "Liderazgo"];
  result = {
    "diseño": "hades",
    "liderazgo": "hades",
    "backend": "hercules",
    "arquitectura": "hercules",
    "frontend": "zeus"
  };
  levels:any =
    {
      hades: [
        { level: ['lock', 'lock', 'unlock', 'lock', 'lock'] },
        { level: ['lock', 'lock', 'lock'] },
        { level: ['lock', 'lock', 'lock'] },
        { level: ['lock'] }],
      hercules: [
        { level: ['lock', 'unlock', 'unlock', 'unlock', 'lock'] },
        { level: ['lock', 'lock', 'lock'] },
        { level: ['lock', 'lock', 'lock', 'unlock'] },
        { level: ['lock'] }],
      zeus: [
        { level: ['unlock', 'lock', 'unlock', 'lock', 'unlock'] },
        { level: ['lock', 'lock', 'lock'] },
        { level: ['lock', 'lock', 'lock'] },
        { level: ['unlock'] }]
    }




  constructor() { }

  ngOnInit(): void {
  }

}
