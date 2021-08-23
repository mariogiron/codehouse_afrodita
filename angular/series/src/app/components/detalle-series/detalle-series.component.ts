import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from 'src/app/interfaces/serie.interface';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-detalle-series',
  templateUrl: './detalle-series.component.html',
  styleUrls: ['./detalle-series.component.css']
})
export class DetalleSeriesComponent implements OnInit {

  miSerie: Serie | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params.idserie)
      this.miSerie = this.seriesService.getSerieById(id);
    })
  }

}
