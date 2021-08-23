import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesService } from 'src/app/services/personajes.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {

  arrPersonajes: Personaje[];
  constructor(
    private personajesService: PersonajesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrPersonajes = [];
  }

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe(params => {
      const idSerie = parseInt(params.idserie);
      this.arrPersonajes = this.personajesService.getPersonajeByIdSerie(idSerie);
    })
  }

}
