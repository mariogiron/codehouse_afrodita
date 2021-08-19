import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  arrProductos: any[];
  producto: any;

  constructor(private activateRouted: ActivatedRoute) {
    this.arrProductos = [
      { id: 1, nombre: 'Leche desnatada', descripcion: 'leche desnatada pascual' },
      { id: 2, nombre: 'Pan', descripcion: 'Pan pueblo rico rico' },
      { id: 3, nombre: 'Pizza', descripcion: 'Pizza siliciliana con mucha piña' },
      { id: 4, nombre: 'Carne', descripcion: 'Yo no como nada no que no haya tenido madre, por que no ha recibido suficiente cariño' }
    ]
    this.producto = {};
  }

  ngOnInit(): void {
    this.activateRouted.params.subscribe(params => {
      const idProducto = Number(params.productoId);
      this.producto = this.arrProductos.find(producto => producto.id === idProducto);
    })
  }

}
