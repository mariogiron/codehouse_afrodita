import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss']
})
export class InfoCharacterComponent implements OnInit {

  character: Character | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {

      this.character = await this.charactersService.getById(Number(params.idcharacter))

    })
  }

}
