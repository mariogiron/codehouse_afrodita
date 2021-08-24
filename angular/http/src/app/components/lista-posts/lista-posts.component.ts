import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPost: Post[];
  alertOk: boolean = false;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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

    //peticion para el queryParams
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.alertOk = (queryParams.insert === 'ok') ? true : false;
    })

  }

  quitarAlert() {
    this.router.navigate(['/home']);
  }

}
