import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/interfaces/serie.interface';

@Component({
  selector: 'app-thumbnail-serie',
  templateUrl: './thumbnail-serie.component.html',
  styleUrls: ['./thumbnail-serie.component.css']
})
export class ThumbnailSerieComponent implements OnInit {

  @Input() serie: Serie;

  constructor() {
    this.serie = {
      id: 0,
      titulo: "",
      creador: "",
      rating: 0,
      fechas: "",
      imagen: "",
      canal: "",
      temporadas: [],
    }
  }

  ngOnInit(): void {
  }
}
