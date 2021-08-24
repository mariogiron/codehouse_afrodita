import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: "", component: ListaPostsComponent },
  { path: "post/:idpost", component: DetallePostComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
