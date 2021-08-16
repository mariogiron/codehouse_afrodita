import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() productoSeleccionado: EventEmitter<Producto>
  producto: Producto;

  constructor() {
    this.productoSeleccionado = new EventEmitter();
    this.producto = {
      titulo: "",
      precio: 0,
      cantidad: 0,
    }
  }

  ngOnInit(): void {
  }

  cargarProducto() {
    this.productoSeleccionado.emit(this.producto);
    this.producto = { titulo: "", precio: 0, cantidad: 0 }
  }

}
