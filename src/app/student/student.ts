//No se compila
//Define la estructura de una entidad, siempre publicos
//No puede tener constructor
//Se pierden otras ventajas de POO

import { homework } from "../model/homework";

//Los metodos siempre son abstractos
export interface Student{
    id:number;
    name:string;
    lastName:string;
    age:number;
    email:string;
    phone:string;
    ppa:number;
    //Este atributo no es obligatorio
    address?:string;
    activated:boolean;
    fechaPago:Date;
    tareas?: homework[];
}