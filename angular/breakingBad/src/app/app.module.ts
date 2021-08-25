import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { C404Component } from './components/c404/c404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterDetailComponent,
    CharacterCardComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
