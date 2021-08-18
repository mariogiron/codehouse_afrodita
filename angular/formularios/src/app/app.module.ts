import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';
import { FormModelComponent } from './components/form-model/form-model.component';

//ncesario para usar los formularios de tipo template
import { FormsModule } from '@angular/forms';

//para trabajar con formularios de tipo model usamos ReactiveForms
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent,
    FormModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
