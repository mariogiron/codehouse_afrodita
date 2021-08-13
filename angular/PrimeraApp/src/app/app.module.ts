import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { RestarComponent } from './components/restar/restar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    RestarComponent,
    UserProfileComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
