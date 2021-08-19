import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  arrPersonas: Persona[];
  constructor() {
    this.arrPersonas = [];
  }

  addPerson(pPerson: Persona) {
    this.arrPersonas.push(pPerson);
    console.log(this.arrPersonas);
  }
}
