import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallePostComponent,
    ListaPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
