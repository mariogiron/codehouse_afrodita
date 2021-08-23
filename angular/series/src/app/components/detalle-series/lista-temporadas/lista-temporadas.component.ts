import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-lista-temporadas',
  templateUrl: './lista-temporadas.component.html',
  styleUrls: ['./lista-temporadas.component.css']
})
export class ListaTemporadasComponent implements OnInit {

  arrTemporadas: any[] = [];
  constructor(
    private seriesService: SeriesService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.activatedRoute.parent?.params.subscribe(params => {
      //necesito el id de la serie.
      //console.log(params.idserie);
      const idSerie = parseInt(params.idserie);
      this.arrTemporadas = this.seriesService.getSeasonsById(idSerie);

    })

  }

}
