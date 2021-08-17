import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titulo: string;
  prioridad: string;
  id: number;
  @Output() tareaEnviada: EventEmitter<Tarea>;

  constructor() {
    this.titulo = "";
    this.prioridad = "";
    this.id = 4;
    this.tareaEnviada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  guardarTarea() {
    const nuevaTarea: Tarea = {
      id: this.id,
      title: this.titulo,
      priority: this.prioridad
    }
    this.tareaEnviada.emit(nuevaTarea);
    this.id++;
  }
}
