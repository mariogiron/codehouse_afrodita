import { Injectable } from '@angular/core';
import { PERSONAJES } from '../db/personajes.db';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor() { }

  getPersonajeByIdSerie(pIdSerie: number): Personaje[] {
    return PERSONAJES.filter(personaje => personaje.serie === pIdSerie)
  }
}
