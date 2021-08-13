import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-aficiones',
  templateUrl: './lista-aficiones.component.html',
  styleUrls: ['./lista-aficiones.component.css']
})
export class ListaAficionesComponent implements OnInit {

  @Input() aficiones: any[];

  constructor() {
    this.aficiones = new Array();
  }

  ngOnInit(): void {
    //console.log(this.aficiones)
  }

}
