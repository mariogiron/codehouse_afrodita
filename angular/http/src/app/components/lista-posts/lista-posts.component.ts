import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPost: Post[];

  constructor(
    private postsService: PostsService
  ) {
    this.arrPost = []
  }

  ngOnInit() {
    //cuando cargamos componente pedimos los datos al servicio. Inyectamos
    this.postsService.getAll()
      .then((response: Post[]) => {
        this.arrPost = response;
      })
      .catch((error) => {
        console.log(error);
      })

  }

}
