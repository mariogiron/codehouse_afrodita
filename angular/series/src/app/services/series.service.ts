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
}
