import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { FormPostComponent } from './components/form-post/form-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: ListaPostsComponent },
  { path: "post/:idpost", component: DetallePostComponent },
  { path: "newpost", component: FormPostComponent },
  { path: "update/:idpost", component: FormPostComponent },
  { path: "**", redirectTo: "/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
