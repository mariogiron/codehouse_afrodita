import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/info-character/episodes/episodes.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import { LocationsComponent } from './components/info-character/locations/locations.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  {
    path: "character/:idcharacter", component: InfoCharacterComponent, children: [
      { path: '', component: EpisodesComponent },
      { path: 'episodes', component: EpisodesComponent },
      { path: 'locations', component: LocationsComponent }
    ]
  },
  { path: "**", redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
