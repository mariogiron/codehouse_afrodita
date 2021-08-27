import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { VistaContactoComponent } from './components/vista-contacto/vista-contacto.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/home" },
  { path: "home", component: HomeComponent },
  { path: "agenda", component: ListaContactosComponent },
  { path: "contacto/:idcontacto", component: VistaContactoComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
