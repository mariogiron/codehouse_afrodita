import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FiltrosComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
