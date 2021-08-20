import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona.interface';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  personajes: Persona[] = [];

  constructor(private personaService: PersonasService) { }


  ngOnInit(): void {
    this.personajes = this.personaService.getAll();
  }

  recogerFiltros(filtros: any) {
    this.personajes = this.personaService.getPeopleByAge(filtros.value);
  }

}
