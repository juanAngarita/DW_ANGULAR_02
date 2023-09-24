import { Injectable } from '@angular/core';
import { Student } from '../student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  //Base de datos falsa con varios estudiantes.
  studentList: Student[] = [
    {
      id: 1,
      name: 'Sebastian',
      lastName: 'Angarita',
      age: 24,
      email: 'juseanto@me.com',
      phone: '3002112575',
      ppa: 4.7,
      activated: true,
      fechaPago: new Date(),
    },
    {
      id: 2,
      name: 'Sebastian2',
      lastName: 'Angarita2',
      age: 25,
      email: 'juseanto@me.com',
      phone: '3002112575',
      ppa: 4.3,
      activated: false,
      fechaPago: new Date(),
    },
    {
      id: 3,
      name: 'Sebastian3',
      lastName: 'Angarita3',
      age: 22,
      email: 'juseanto3@me.com',
      phone: '3122112575',
      ppa: 4.1,
      activated: true,
      fechaPago: new Date(),
    },
    {
      id: 4,
      name: 'Sebastian4',
      lastName: 'Angarita4',
      age: 19,
      email: 'juseanto4@me.com',
      phone: '3122112535',
      ppa: 3.5,
      activated: true,
      fechaPago: new Date(),
    },
  ];

  findAll(){
    return this.studentList;
  }

  findById(id:number):Student{
    const student:Student = this.studentList.find(o => o.id === id)!;
    return student;
  }
}
