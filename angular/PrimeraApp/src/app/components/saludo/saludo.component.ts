import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string;
  color: string;
  url: string;

  constructor() {
    this.nombre = 'Juan Antonio';
    this.color = 'verde';
    this.url = 'https://picsum.photos/200/300';
  }

  ngOnInit(): void {
  }

  sumar(numA: number, numB: number): number {
    return numA + numB;
  }

  dameColor(): string {
    return "azul";
  }

}
