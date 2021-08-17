import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgifelseComponent } from './components/ngifelse/ngifelse.component';

@NgModule({
  declarations: [
    AppComponent,
    NgstyleComponent,
    NgclassComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgifelseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
