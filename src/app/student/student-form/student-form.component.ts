import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../student';
import { StudentCL } from 'src/app/model/student-cl';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  
//queremos que el estudiante se transmita al componente padre a traves de un evento
  @Output()
  addStudentEvent = new EventEmitter<Student>();

  @Output()
  ocultarFormularioEvent = new EventEmitter<boolean>();

  sendStudent!: Student;

  //modelo
  formStudent: Student = {
    id: 0,
    name: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
    ppa: 3.0,
    activated: true,
    fechaPago: new Date(),
  };

  //agregar un estudiante a partir del formulario
  addStudentForm() {
    console.log(this.formStudent);
    //para copiar los valores
    this.sendStudent = Object.assign({}, this.formStudent);

    this.addStudentEvent.emit(this.sendStudent);
  }

    //agregar un estudiante a partir del formulario
  addStudent(form:any){
      //para copiar los valores
      this.sendStudent = Object.assign({}, this.formStudent);
  
      this.addStudentEvent.emit(this.sendStudent);
  }


  cancelar(){
    this.ocultarFormularioEvent.emit(false);
  }
}
