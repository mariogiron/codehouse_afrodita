import { Component } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: Tarea[];
  prioridad: string;

  constructor() {
    this.arrTareas = [
      {
        id: 1,
        title: "Estudiar Angular",
        priority: 'urgente'
      },
      {
        id: 2,
        title: "Sacar al perro",
        priority: 'diaria'
      },
      {
        id: 3,
        title: "Leer un libro",
        priority: 'mensual'
      }
    ]
    this.prioridad = "";
  }

  onDeleteTarea($event: number) {
    this.arrTareas = this.arrTareas.filter(tarea => tarea.id !== $event);
  }

  onTareaGuardar($event: Tarea) {
    this.arrTareas.push($event);
  }

  onFiltrarPrioridad($event: string) {
    this.prioridad = $event;
  }
}
