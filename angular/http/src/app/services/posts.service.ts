import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;


  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'https://jsonplaceholder.typicode.com/posts/';

  }

  getAll(): Promise<Post[]> {
    //promesa - then-catch  async-await
    return this.httpClient.get<Post[]>(this.baseUrl).toPromise();
  }

  getById(pId: number): Promise<Post> {
    return this.httpClient.get<Post>(this.baseUrl + pId).toPromise()
  }

  create(pFormValue: any): Promise<Post> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    }
    return this.httpClient.post<Post>(this.baseUrl, pFormValue, httpOptions).toPromise()
  }

  delete(pId: number | undefined): Promise<any> {
    return this.httpClient.delete<any>(this.baseUrl + pId).toPromise();
  }

  update(pFormValue: any): Promise<Post> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json; charset=UTF-8',
      }),
    }
    return this.httpClient.put<Post>(this.baseUrl + pFormValue.id, pFormValue, httpOptions).toPromise()
  }
}
