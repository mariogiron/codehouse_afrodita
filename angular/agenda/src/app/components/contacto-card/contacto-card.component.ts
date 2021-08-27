import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto.interfaz';

@Component({
  selector: 'app-contacto-card',
  templateUrl: './contacto-card.component.html',
  styleUrls: ['./contacto-card.component.css']
})
export class ContactoCardComponent implements OnInit {

  @Input() contacto: Contacto | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
