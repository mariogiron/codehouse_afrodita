import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePostComponent } from './components/detalle-post/detalle-post.component';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { FormPostComponent } from './components/form-post/form-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallePostComponent,
    ListaPostsComponent,
    FormPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
