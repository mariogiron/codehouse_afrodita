import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BotonComponent } from './components/boton/boton.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    HeaderComponent,
    TablaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
