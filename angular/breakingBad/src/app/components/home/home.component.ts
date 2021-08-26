import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCharacters: Character[];
  mostrarPaginacion: boolean;
  pagination: any[] = [];

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrCharacters = [];
    this.mostrarPaginacion = true;
  }

  async ngOnInit() {

    const all = await this.charactersService.getAll()
    const numPages = Math.ceil(all.length / 10);
    this.pagination = new Array(numPages);

    //debo discernir entre ruta activa y no ruta activa, si no ruta activa cargo todos los personajes, si hay ruta activa cargo la busqueda

    this.activatedRoute.params.subscribe(async params => {
      //console.log('params', params)
      if (params.name) {
        this.arrCharacters = await this.charactersService.getByName(params.name);
        this.mostrarPaginacion = false;
      } else if (params.page) {
        this.arrCharacters = await this.charactersService.getByPage(Number(params.page));
        this.mostrarPaginacion = true;
      } else {
        this.arrCharacters = await this.charactersService.getByPage();
        this.mostrarPaginacion = true;
      }
    })

    //vamos a ver como recogemos queryParams.

    this.activatedRoute.queryParams.subscribe(async queryParams => {
      //console.log('queryParams', queryParams);
      if (queryParams.category) {
        this.arrCharacters = await this.charactersService.getByCategory(queryParams.category)
        this.mostrarPaginacion = false;
      } else {
        this.arrCharacters = await this.charactersService.getByPage();
        this.mostrarPaginacion = true;
      }

    })

  }

/* onClick(pPage){
     this.arrCharacters = await this.charactersService.getByPage(pPage);
} */

}
