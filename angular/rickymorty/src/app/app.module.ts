import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InfoCharacterComponent } from './components/info-character/info-character.component';
import { HomeComponent } from './components/home/home.component';
import { EpisodesComponent } from './components/info-character/episodes/episodes.component';
import { LocationsComponent } from './components/info-character/locations/locations.component';
import { CardEpisodeComponent } from './components/info-character/card-episode/card-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InfoCharacterComponent,
    HomeComponent,
    EpisodesComponent,
    LocationsComponent,
    CardEpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
