import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.css']
})
export class RestarComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  mensaje: string;

  constructor() {
    this.num1 = 0;
    this.num2 = 0;
    console.log('Constructor', this.num1, this.num2)
    this.mensaje = ""
  }

  ngOnInit(): void {
    console.log('NGONINIT', this.num1, this.num2)
  }

  devolverResultado(event: any): void {
    let resultado = this.num1 - this.num2;
    //console.log(event.target.innerText)
    // console.log(event.target.dataset.mensaje)
    this.mensaje = `${event.target.dataset.mensaje} ${resultado}`
  }
}
