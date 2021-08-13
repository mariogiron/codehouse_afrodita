import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ListaAficionesComponent } from './components/lista-aficiones/lista-aficiones.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListaAficionesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
