import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {

  textoBoton: string;
  estado: boolean;

  constructor() {
    this.textoBoton = "Mostrar";
    this.estado = true;
  }

  ngOnInit(): void {
  }

  onClickBoton() {
    this.estado = !this.estado;
    console.log(this.estado);
  }
}
