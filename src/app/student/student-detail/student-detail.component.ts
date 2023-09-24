import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from 'src/app/services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {

  @Input()
  student!:Student;

  //Inyectar dependencias
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  //Se llama una única vez cuando el componente se renderiza en pantalla
  ngOnInit(): void {
    console.log("ngOnInit de detail");
    //LLamar un API
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 
      this.student = this.studentService.findById(id);
    })
  }

  //Dado que el componente tiene una propiedad input se llama despues del constructor
  ngOnChanges(): void {
    console.log("ngOnChanges de detail");
  }

  siguiente(){
    let nextID = this.student.id + 1;
    this.router.navigate(['/student/detail', nextID]);
  }
}
