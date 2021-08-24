import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalle-post',
  templateUrl: './detalle-post.component.html',
  styleUrls: ['./detalle-post.component.css']
})
export class DetallePostComponent implements OnInit {

  post: Post | undefined;

  constructor(
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //capturas el id de la ruta
    this.activatedRoute.params.subscribe(async params => {
      this.post = await this.postsService.getById(Number(params.idpost));
    })
  }

}
