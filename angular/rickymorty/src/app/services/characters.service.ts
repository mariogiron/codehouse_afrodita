import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = "https://rickandmortyapi.com/api/character/"
  constructor(private httpClient: HttpClient) { }

  getByPage(url: string = this.baseUrl): Promise<any> {
    return this.httpClient.get<any>(url).toPromise();
  }

  getById(id: number): Promise<Character> {
    return this.httpClient.get<Character>(this.baseUrl + id).toPromise();
  }
}
