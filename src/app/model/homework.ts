import { Student } from "../student/student"

export interface homework{
    id:number,
    title:string,
    description:string
    estudiante?: Student
}