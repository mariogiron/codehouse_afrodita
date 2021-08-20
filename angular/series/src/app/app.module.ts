import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';
import { DetalleSeriesComponent } from './components/detalle-series/detalle-series.component';
import { FiltrosComponent } from './components/filtros/filtros.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    DetalleSeriesComponent,
    FiltrosComponent
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
