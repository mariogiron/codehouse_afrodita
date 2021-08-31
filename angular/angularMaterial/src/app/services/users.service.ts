import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "https://reqres.in/api/users"
  }

  getAll(): Promise<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl).toPromise()
  }
}
