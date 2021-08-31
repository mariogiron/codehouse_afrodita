import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "https://da1c-88-3-9-108.ngrok.io/";
  }


  register(pForm: { name: string, surname: string, username: string, password: string, mail: string, address: string, age: number }): any {
    return this.httpClient.post<any>(this.baseUrl + 'register', pForm).toPromise();
  }

  login(pFormValues: any): any {
    return this.httpClient.post(this.baseUrl + 'login', pFormValues).toPromise();
  }

  getPremio(userToken: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'user-token': userToken
      })
    }

    return this.httpClient.get<any>(this.baseUrl + 'premio', httpOptions).toPromise();
  }


}
