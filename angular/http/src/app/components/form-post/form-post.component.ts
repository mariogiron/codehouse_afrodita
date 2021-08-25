import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  title: string = "";
  constructor(
    private postsService: PostsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    //hay que poner en este punto validadores para title y body, required en los dos y el title vamos a ponerle de min longitud de 20 caracteres.
    this.formPost = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(20)
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      userId: new FormControl(1, [])
    })

  }

  ngOnInit(): void {
    //capturar la ruta activa, si viene vacia estamos en crear y si no estamos en actualizar
    this.activatedRoute.params.subscribe(async params => {
      if (params.idpost) {
        //update
        this.title = "Actualizar"

        //pedir los datos del post que quier actualizar - servicio.
        this.post = await this.postsService.getById(Number(params.idpost))

        this.formPost = new FormGroup({
          title: new FormControl(this.post.title, [
            Validators.required,
            Validators.minLength(20)
          ]),
          body: new FormControl(this.post.body, [
            Validators.required
          ]),
          userId: new FormControl(1, []),
          id: new FormControl(this.post.id, [])
        })

      } else {
        //create
        this.title = "Crear nuevo"
      }
    })

  }

  async onSubmit() {
    let alert = "";
    if (this.formPost.value.id) {
      this.post = await this.postsService.update(this.formPost.value);
      console.log(this.post);
      alert = "update";
    } else {
      this.post = await this.postsService.create(this.formPost.value);
      console.log(this.post);
      alert = "insert";
    }


    if (this.post.id !== null) {
      this.router.navigate(['/home'], { queryParams: { tipo: alert, estado: 'ok' } });
    }
  }

  checkInput(controlName: string, validatorName: string): boolean {
    if (this.formPost.get(controlName)?.hasError(validatorName) && this.formPost.get(controlName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

}
