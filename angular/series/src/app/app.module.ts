import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ThumbnailSerieComponent } from './components/thumbnail-serie/thumbnail-serie.component';
import { ListaPersonajesComponent } from './components/detalle-series/lista-personajes/lista-personajes.component';
import { ListaTemporadasComponent } from './components/detalle-series/lista-temporadas/lista-temporadas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    DetalleSeriesComponent,
    FiltrosComponent,
    ThumbnailSerieComponent,
    ListaPersonajesComponent,
    ListaTemporadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
