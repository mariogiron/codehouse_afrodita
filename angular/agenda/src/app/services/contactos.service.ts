import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../interfaces/contacto.interfaz';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  baseUrl: string = "https://reqres.in/api/users/"
  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<any> {
    return this.httpClient.get<any>(this.baseUrl + pId).toPromise()
  }
}
