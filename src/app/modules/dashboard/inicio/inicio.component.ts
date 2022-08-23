import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/data/interfaces/course.interface';
import { DataHades } from 'src/app/data/mock/data-hades';
import { DataHercules } from 'src/app/data/mock/data-hercules';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  skillsHades = DataHades.skillsHades;
  skillsHercules = DataHercules.skillsHercules;
  courses: Course[] = [];
  levels2: number[] = [1, 2, 3, 4];
  categories: any[] = [
    {
      es: "Diseño",
      en: 'design'
    },
    {
      es: "FrontEnd",
      en: 'frontEnd'
    },
    { es: "BackEnd", en: 'backEnd' },
    { es: "Arquitectura", en: 'arquitecture' },
    { es: "Liderazgo", en: 'leadership' }];  

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
    console.log((Object.keys(this.skillsHades) as (keyof typeof this.skillsHades)[]));
    this.categories.forEach((cate, index) => {
      let course: Course = {
        id: index,
        category: cate,
        level: {
          name: 'hades',
          number: index + 1
        },
        skill: 'react',
        status: 'lock'
      };

      this.courses.push(course)
    });
    let course: Course = {
      id: 5,
      category: 'Diseño',
      level: {
        name: 'hades',
        number: 3
      },
      skill: 'ux',
      status: 'lock'
    };

    this.courses.push(course)
  }
  getStatusHades1(catego: string, nivel: number) {
    let filter: any[] = [];
    //const filter = this.courses.filter(course => course.category == catego && course.level.number == nivel);
    switch (catego) {
      case 'Diseño':
        filter = this.skillsHades.design.filter((skill: any) => skill.level == nivel);
        break;
      case 'FrontEnd':
        filter = this.skillsHades.frontEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'BackEnd':
        filter = this.skillsHades.backEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'Arquitectura':
        filter = this.skillsHades.arquitecture.filter((skill: any) => skill.level == nivel);
        break;
      case 'Liderazgo':
        filter = this.skillsHades.leadership.filter((skill: any) => skill.level == nivel);
        break;

      default:
        break;
    }
    return filter[0] && filter[0]?.status == 'unlock' ? true : false

  }
  getStatusHades2(catego: string, nivel: number) {
    let filter: any[] = [];
    //const filter = this.courses.filter(course => course.category == catego && course.level.number == nivel);
    switch (catego) {
      case 'Diseño':
        filter = this.skillsHades.design.filter((skill: any) => skill.level == nivel);
        break;
      case 'FrontEnd':
        filter = this.skillsHades.frontEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'BackEnd':
        filter = this.skillsHades.backEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'Arquitectura':
        filter = this.skillsHades.arquitecture.filter((skill: any) => skill.level == nivel);
        break;
      case 'Liderazgo':
        filter = this.skillsHades.leadership.filter((skill: any) => skill.level == nivel);
        break;

      default:
        break;
    }
    console.log(filter);
    return filter[0] && filter[0]?.status == 'lock' ? true : false

  }
  getSkillHades(catego: string, nivel: number) {
    let filter: any[] = [];
    //const filter = this.courses.filter(course => course.category == catego && course.level.number == nivel);
    switch (catego) {
      case 'Diseño':
        filter = this.skillsHades.design.filter((skill: any) => skill.level == nivel);
        break;
      case 'FrontEnd':
        filter = this.skillsHades.frontEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'BackEnd':
        filter = this.skillsHades.backEnd.filter((skill: any) => skill.level == nivel);
        break;
      case 'Arquitectura':
        filter = this.skillsHades.arquitecture.filter((skill: any) => skill.level == nivel);
        break;
      case 'Liderazgo':
        filter = this.skillsHades.leadership.filter((skill: any) => skill.level == nivel);
        break;

      default:
        break;
    }
    //console.log(filter);
    return filter[0]?.name

  }  

}
