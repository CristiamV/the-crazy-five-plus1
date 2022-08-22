import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/data/interfaces/course.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  courses: Course[] =[];  

  categories:string[] = ["Diseño", "FrontEnd", "BackEnd", "Arquitectura", "Liderazgo"];
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
    this.categories.forEach((cate, index) => { 
      let course: Course = {id: index,
                              category:cate,
                              level: {
                                      name: 'hades',
                                      number: index
                              },
                              status:'lock'};
                              
     this.courses.push(course)
      // this.courses[index].category = cate;
      // this.courses[index].id = index;
      // this.courses[index].level.name = 'hades';
      // this.courses[index].level.number = index;
    });
    console.log(this.courses);
  }

}
