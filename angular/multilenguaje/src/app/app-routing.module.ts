import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
// import { ContenidoEsComponent } from './components/contenido-es/contenido-es.component';
// import { ContenidoEnComponent } from './components/contenido-en/contenido-en.component';
// import { ContenidoFrComponent } from './components/contenido-fr/contenido-fr.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "/lang/es" },
  { path: "lang/:language", component: ContenidoComponent },
  // { path: 'es', component: ContenidoEsComponent },
  // { path: 'en', component: ContenidoEnComponent },
  // { path: 'fr', component: ContenidoFrComponent },
  { path: "**", redirectTo: "/es" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
