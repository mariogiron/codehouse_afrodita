import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
