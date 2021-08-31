import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('Tocado');
  }
}
