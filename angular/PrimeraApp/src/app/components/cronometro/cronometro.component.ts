import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  @Input('inicio') contador: number;
  //1 - definicion el output
  @Output() terminaCrono: EventEmitter<string>;
  estado: boolean;
  textoBoton: string;

  constructor() {
    this.contador = 0;
    this.estado = false;
    this.textoBoton = "INICIAR"

    //2 - inicializamos el emitter;
    this.terminaCrono = new EventEmitter();
  }

  ngOnInit(): void {
  }

  iniciarContador() {
    this.estado = !this.estado;
    this.textoBoton = (this.estado) ? 'PARAR' : 'INICIAR';
    const intervalo = setInterval(() => {
      if (this.estado === false) {
        clearInterval(intervalo);
        return;
      }
      this.contador--;
      if (this.contador === 0) {
        clearInterval(intervalo)
        //3 - emito la informacion al padre
        this.terminaCrono.emit(`El cronometro ha terminado`);
      }
    }, 1000);
  }

}

/**
 *  funciones intervalicas, son funciones que me permite crear lapsos de tiempo de forma autonoma.
 *  setInterval(callback, time) -> se repite cada x milisegundos
 *  setTimeOut(callback, time) -> solo espera x milisegundos y acciona el callbac una vez
*/
