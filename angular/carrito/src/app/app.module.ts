import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TotalCompraComponent } from './components/total-compra/total-compra.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TotalCompraComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
