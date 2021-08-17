import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() prioridadEnviada: EventEmitter<string>;
  @Output() busquedaEnviada: EventEmitter<string>;

  constructor() {
    this.prioridadEnviada = new EventEmitter();
    this.busquedaEnviada = new EventEmitter();
  }


  ngOnInit(): void {
  }

  filtrarPrioridad($event: any) {
    this.prioridadEnviada.emit($event.target.value);
  }

  capturarBusqueda($event: any) {
    this.busquedaEnviada.emit($event.target.value);
  }
}
