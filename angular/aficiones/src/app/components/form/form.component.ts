import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Two way databinding
  nombre: string;
  aficion: string;
  @Output() aficionCreada: EventEmitter<any>

  constructor() {
    this.nombre = "";
    this.aficion = "";
    this.aficionCreada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarDatos() {
    const nuevaAficion = {
      nombre: this.nombre,
      aficion: this.aficion
    }
    this.aficionCreada.emit(nuevaAficion);

  }
}
