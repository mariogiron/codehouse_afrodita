import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoEsComponent } from './components/contenido-es/contenido-es.component';
import { ContenidoEnComponent } from './components/contenido-en/contenido-en.component';
import { ContenidoFrComponent } from './components/contenido-fr/contenido-fr.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoEsComponent,
    ContenidoEnComponent,
    ContenidoFrComponent,
    ContenidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
