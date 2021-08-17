import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

//ncesario para usar los formularios de tipo template
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
