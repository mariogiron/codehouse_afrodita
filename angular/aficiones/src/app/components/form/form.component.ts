import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Two way databinding
  nombre: string;
  aficion: string;

  constructor() {
    this.nombre = "";
    this.aficion = "";
  }

  ngOnInit(): void {
  }

  guardarDatos() {
    console.log(this.nombre, this.aficion);
  }
}
