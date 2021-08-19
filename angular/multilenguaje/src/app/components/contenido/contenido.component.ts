import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  arrContenidos: any[];
  contenido: any;

  constructor(private activatedRoute: ActivatedRoute) {

    this.arrContenidos = [
      {
        lang: 'es',
        title: 'Hola, Bienvenido a este componente'
      },
      {
        lang: 'en',
        title: 'Hello, Welcome to this component'
      },
      {
        lang: 'fr',
        title: 'Bonjour, bienvenue sur ce composant'
      },
    ]
    this.contenido = {};
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const idioma = params.language;
      this.contenido = this.arrContenidos.find(contenido => contenido.lang === idioma);
    })
  }

}
