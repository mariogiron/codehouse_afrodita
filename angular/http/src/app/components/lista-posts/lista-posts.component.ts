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
  alertDelete: boolean = false;
  alertUpdate: boolean = false;

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
      this.alertOk = (queryParams.estado === 'ok' && queryParams.tipo === "insert") ? true : false;
      this.alertUpdate = (queryParams.estado === 'ok' && queryParams.tipo === "update") ? true : false;
    })

  }

  quitarAlert(pAlert: string): void {
    if (pAlert === "success") {
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 500);
    } else if (pAlert === "delete") {
      this.alertDelete = false;
    }
  }

  async borrarPost(pId: number | undefined) {
    //console.log(pId, typeof pId);
    const mensaje = await this.postsService.delete(pId);
    if (mensaje) {
      this.alertDelete = true;
    }
  }

}
