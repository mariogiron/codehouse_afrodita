import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  @Input() empleados: Empleado[];

  constructor() {
    this.empleados = [];
  }

  ngOnInit(): void { }


  ngDoCheck(): void {
    //doCheck me sirve para chequear cualquier cambio en la estructura de datos esta permanentemente comprobando que el array  se modifica y me lanza los cambios.
    
    //console.log(this.empleados)
  }


}
