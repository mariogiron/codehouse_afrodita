import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  numProductos: number;
  departamento: string;
  arrTrabajadores: any[];

  constructor() {
    this.numProductos = 1;
    this.departamento = 'desarrollo';
    this.arrTrabajadores = [
      {
        nombre: 'Juan',
        departamento: 'desarrollo'
      },
      {
        nombre: 'Lucia',
        departamento: 'direccion'
      },
      {
        nombre: 'Maria',
        departamento: 'contabilidad'
      }
    ]
  }

  ngOnInit(): void {
  }

}
