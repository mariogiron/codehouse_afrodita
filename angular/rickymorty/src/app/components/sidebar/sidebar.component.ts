import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  arrCharacters: Character[] = [];
  next: string = "";
  prev: string = "";
  constructor(private charactersService: CharactersService) { }

  async ngOnInit(): Promise<any> {
    const response = await this.charactersService.getByPage();
    this.next = response.info.next;
    this.prev = response.info.prev;
    this.arrCharacters = response.results;
  }

  async nextPage() {
    if (this.next !== null) {
      const response = await this.charactersService.getByPage(this.next);
      this.next = response.info.next;
      this.prev = response.info.prev;
      this.arrCharacters = response.results;
    }
  }

  async prevPage() {
    if (this.prev !== null) {
      const response = await this.charactersService.getByPage(this.prev);
      this.next = response.info.next;
      this.prev = response.info.prev;
      this.arrCharacters = response.results;
    }
  }
}
