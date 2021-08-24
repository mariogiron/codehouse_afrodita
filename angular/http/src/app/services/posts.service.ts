import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';

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


}
