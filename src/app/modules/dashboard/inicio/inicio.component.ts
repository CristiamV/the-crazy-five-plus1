import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/data/interfaces/course.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  courses: Course[] = [];
  levels2: number[] = [1, 2, 3, 4, 5];
  categories: string[] = ["Diseño", "FrontEnd", "BackEnd", "Arquitectura", "Liderazgo"];
  result = {
    "diseño": "hades",
    "liderazgo": "hades",
    "backend": "hercules",
    "arquitectura": "hercules",
    "frontend": "zeus"
  };
  levels: any =
    {
      hades: [
        { level: ['lock', 'lock', 'unlock', 'lock', 'lock'] },
        { level: ['lock', 'lock', 'lock', '', ''] },
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
      let course: Course = {
        id: index,
        category: cate,
        level: {
          name: 'hades',
          number: index + 1
        },
        status: 'lock'
      };

      this.courses.push(course)
    });
    console.log(this.courses);
    let course: Course = {
      id: 5,
      category: 'Diseño',
      level: {
        name: 'hades',
        number: 3
      },
      status: 'unlock'
    };

    this.courses.push(course)
    console.log(this.courses);
  }
  getStatus1(catego:string, nivel:number){    
    const filter = this.courses.filter(course => course.category == catego && course.level.number == nivel);
    console.log(catego,filter);
    return filter[0] && filter[0]?.status=='unlock' ? true :false

  }
  getStatus2(catego:string, nivel:number){    
    const filter = this.courses.filter(course => course.category == catego && course.level.number == nivel);    
    return filter[0] && filter[0]?.status=='lock' ? true :false

  }

}
