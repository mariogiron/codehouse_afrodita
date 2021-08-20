import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private arrPersonas: Persona[];
  constructor() {
    this.arrPersonas = [];
  }

  addPerson(pPerson: Persona) {
    this.arrPersonas.push(pPerson);
    console.log(this.arrPersonas);
  }

  getAll(): Persona[] {
    return this.arrPersonas;
  }

  getPeopleByAge(pFiltros: any): Persona[] {
    return this.arrPersonas.filter(persona => persona.edad >= pFiltros.edadMin && persona.edad <= pFiltros.edadMax);
  }

}
