import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {

  @Output() busqueda: EventEmitter<string>;
  @Output() filtroRating: EventEmitter<number>;
  @Output() filtroCanal: EventEmitter<string>;

  rating: number;


  constructor() {
    this.busqueda = new EventEmitter();
    this.filtroRating = new EventEmitter();
    this.filtroCanal = new EventEmitter();
    this.rating = 0;
  }

  ngOnInit(): void {
  }

  recogerDatoBusqueda($event: any) {
    this.busqueda.emit($event.target.value);
  }

  recogerRating() {
    this.filtroRating.emit(this.rating);
  }

  recogerCanal($event: any) {
    this.filtroCanal.emit($event.target.value);
  }

}
