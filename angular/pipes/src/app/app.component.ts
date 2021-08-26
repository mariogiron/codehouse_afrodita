import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  numero: number = 32.345677;
  porcentaje: number = 0.2532345;
  precio: number = 128901;
  fechaActual: Date = new Date();
  miString: string = "Hola como estamos";
  arrAlumnos: any[];
  arrAnimales: string[];

  inicio: number = 0;
  fin: number;

  texto: string = "Lorem <strong>ipsum</strong>, dolor sit amet consectetur adipisicing elit. Velit, quos ex a eius odit <em>dolores</em> doloribus inventore ipsa earum nisi error dolore laborum perferendis, officiis vel deleniti adipisci, accusamus dolorem";

  miPromesa: Promise<any>;

  constructor(private httpClient: HttpClient) {

    this.arrAlumnos = [
      { nombre: 'Pepe', nota: 6 },
      { nombre: 'Lucia', nota: 3 },
      { nombre: 'Ramon', nota: 4 },
      { nombre: 'Marta', nota: 5 },
      { nombre: 'Teresa', nota: 10 },
    ]
    this.arrAnimales = ['perro', 'gato', 'periquito', 'elefante', 'tortuga'];
    this.fin = this.arrAnimales.length;

    this.miPromesa = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').toPromise();
  }

  ngOnInit(): void {
    setInterval(() => { this.fechaActual = new Date }, 1000)
  }


  cambiarValor($event: any, estado: string): void {
    if (estado === 'inicio') {
      this.inicio = $event.target.value;
    } else {
      this.fin = $event.target.value;
    }
  }
}
