import { Injectable } from '@angular/core';
import { SERIES } from '../db/series.db';
import { Serie } from '../interfaces/serie.interface';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  constructor() { }

  getAll() {
    return SERIES;
  }

  getSerieById(pId: number): Serie | undefined {
    return SERIES.find(serie => serie.id === pId);
  }

  getSeasonsById(pId: number): any[] {
    let temporadas = new Array();

    SERIES.forEach(serie => {
      if (serie.id === pId) {
        temporadas = serie.temporadas;
      }
    })
    return temporadas;
  }

  getByTitle(pSearch: string): Serie[] {

    return SERIES.filter(serie => serie.titulo.toLowerCase().includes(pSearch.toLowerCase()));

  }

  getByRating(pRating: number): Serie[] {
    return SERIES.filter(serie => serie.rating >= pRating);
  }

  getChannels(): Array<string> {
    return [...new Set(SERIES.map(serie => serie.canal))];
  }

  getByChannel(pChannel: string): Serie[] {
    return SERIES.filter(serie => serie.canal === pChannel);
  }
}
