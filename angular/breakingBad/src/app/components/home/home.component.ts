import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrCharacters: Character[];

  constructor(
    private charactersService: CharactersService
  ) {
    this.arrCharacters = [];
  }

  async ngOnInit(): Promise<any> {
    this.arrCharacters = await this.charactersService.getAll();
  }


}
