import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.css']
})
export class FormPostComponent implements OnInit {

  formPost: FormGroup;
  post: Post | undefined;
  constructor(
    private postsService: PostsService,
    private router: Router
  ) {

    //hay que poner en este punto validadores para title y body, required en los dos y el title vamos a ponerle de min longitud de 20 caracteres.
    this.formPost = new FormGroup({
      title: new FormControl('', []),
      body: new FormControl('', []),
      userId: new FormControl(1, [])
    })

  }

  ngOnInit(): void {
  }

  async onSubmit() {
    this.post = await this.postsService.create(this.formPost.value);
    console.log(this.post);
    if (this.post.id !== null) {
      this.router.navigate(['/home'], { queryParams: { insert: 'ok' } });
    }
  }

}
