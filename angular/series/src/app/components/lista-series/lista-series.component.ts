import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  arrSeries: Serie[];

  constructor(
    private seriesService: SeriesService
  ) {
    this.arrSeries = [];
  }

  ngOnInit(): void {
    this.arrSeries = this.seriesService.getAll();
  }

  onFiltroRaiting($event: any) {
    console.log($event)
  }

  onFiltroCanal($event: any) {
    console.log($event)
  }
  onBusqueda($event: any) {
    console.log('busqueda', $event)
  }
}
