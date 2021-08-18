import { Component } from '@angular/core';
import { Empleado } from './interfaces/empleado.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = [
      {
        name: "Juan Antonio",
        surname: "Pérez Jarillo",
        dni: "8521456C",
        email: "jj@gmail.com",
        photo: "https://randomuser.me/api/portraits/men/60.jpg",
        department: "contabilidad",
        status: true
      },
      {
        name: "Mario",
        surname: "Giron",
        dni: "8461645V",
        email: "mario@gmail.com",
        photo: "https://randomuser.me/api/portraits/men/23.jpg",
        department: "desarrollo",
        status: false
      }
    ];
  }

  onEmpleadoEnviado($event: Empleado) {
    this.arrEmpleados.push($event);
  }
}
