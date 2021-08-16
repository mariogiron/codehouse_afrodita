import { Component } from '@angular/core';
import { Producto } from './interfaces/producto.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productos: Producto[];

  constructor() {
    this.productos = [];
  }

  onProductoSeleccionado($event: Producto) {
    this.productos.push($event);
    console.log(this.productos);
  }


}
