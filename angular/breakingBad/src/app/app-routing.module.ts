import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:page', component: HomeComponent },
  { path: 'search/:name', component: HomeComponent },
  //{ path: 'category/:category', component: HomeComponent },
  { path: 'character/:idcharacter', component: CharacterDetailComponent },
  { path: "**", component: C404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
