import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { VistaContactoComponent } from './components/vista-contacto/vista-contacto.component';
import { ContactoCardComponent } from './components/contacto-card/contacto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaContactosComponent,
    VistaContactoComponent,
    ContactoCardComponent
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
