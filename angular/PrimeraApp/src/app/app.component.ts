import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrContacts: any[];

  constructor() {

    this.arrContacts = new Array(
      { nombre: "Ramiro", telefono: "3456723467", email: "r@gmail.com" },
      { nombre: "Paco", telefono: "42432344", email: "j@gmail.com" },
      { nombre: "Julio", telefono: "4234232", email: "m@gmail.com" },
      { nombre: "Alex", telefono: "1121344", email: "a@gmail.com" },
      { nombre: "Raquel", telefono: "663463", email: "ra@gmail.com" },
      { nombre: "Maria", telefono: "3463664", email: "m@gmail.com" })
  }
}
