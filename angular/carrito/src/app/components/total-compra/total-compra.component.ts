import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';


@Component({
  selector: 'app-total-compra',
  templateUrl: './total-compra.component.html',
  styleUrls: ['./total-compra.component.css']
})
export class TotalCompraComponent implements OnInit {

  @Input() productos: Producto[];
  constructor() {
    this.productos = [];
  }

  ngOnInit(): void {
  }

  mostrarPrecioTotal() {
    let result = "TOTAL DE LA COMPRA: ";
    let mapaPrecios = this.productos.map(producto => producto.precio * producto.cantidad);
    
    if (mapaPrecios.length != 0) {
      let sumaTotal = mapaPrecios.reduce((precioAnterior, precioSiguiente) => precioAnterior + precioSiguiente);
      result += sumaTotal + '€';
    }

    return result;

  }

}
