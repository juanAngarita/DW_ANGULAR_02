import { Injectable } from '@angular/core';
import { homework } from '../model/homework';
import { StudentService } from './student.service';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  constructor(
  ) { }

  homeWorks: homework[] = [
    {
      id: 1,
      title: 'Tarea 1',
      description: 'Descripción de la tarea',
    },
    {
      id: 2,
      title: 'Tarea 2',
      description: 'Descripción de la tarea',
    },
    {
      id: 3,
      title: 'Tarea 3',
      description: 'Descripción de la tarea',
    }
  ]

  findById(id:number):homework{
    const homework:homework = this.homeWorks.find(o => o.id === id)!;
    return homework;
  }
}
