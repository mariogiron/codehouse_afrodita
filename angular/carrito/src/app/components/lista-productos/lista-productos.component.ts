import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {
    console.log(this.productos);
  }

  mostrarProductos() {
    let result = "";

    this.productos.forEach(producto => result += `<li>${producto.titulo} ( cantidad: ${producto.cantidad}) - ${producto.precio * producto.cantidad} €</li>`);

    return result;
  }

}
