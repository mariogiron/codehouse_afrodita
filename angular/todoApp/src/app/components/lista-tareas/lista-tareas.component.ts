import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/interfaces/tarea.interface';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {

  @Input() tareas: Tarea[];
  @Input() prioridad: string;
  @Input() busqueda: string;
  @Output() tareaBorrar: EventEmitter<number>
  tareasPintadas: Tarea[];

  constructor() {
    this.tareas = [];
    this.tareaBorrar = new EventEmitter();
    this.prioridad = "";
    this.tareasPintadas = [];
    this.busqueda = "";
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    if (this.prioridad !== "") {
      this.tareasPintadas = this.tareas.filter(tarea => tarea.priority === this.prioridad);
    } else if (this.busqueda !== "") {
      this.tareasPintadas = this.tareas.filter(tarea => tarea.title.toLowerCase().includes(this.busqueda.toLowerCase()));
    }
    else {
      this.tareasPintadas = this.tareas;
    }

  }

  borrarTarea(tareaId: number) {
    this.tareaBorrar.emit(tareaId);
  }

}
