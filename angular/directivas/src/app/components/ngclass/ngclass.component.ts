import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  activo: boolean;

  constructor() {
    this.activo = true;
  }

  ngOnInit(): void {
  }

  cambiarEstado() {
    this.activo = !this.activo;
  }
}
